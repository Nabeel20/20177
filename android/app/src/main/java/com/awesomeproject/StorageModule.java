package com.awesomeproject;



import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Environment;
import android.util.Base64;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.UUID;


public class StorageModule extends ReactContextBaseJavaModule {
   StorageModule(ReactApplicationContext context) {
       super(context);
   }

  @Override
  public String getName() {
    // name of module should be the same as IOS
    return "Storage";
  }

  final String telegramX_path = "/storage/emulated/0/Android/data/org.thunderdog.challegram/files/documents";
  @ReactMethod
  public void get_files_list(Promise promise){
    try {
      String output = '@Java empty output';
      File files_path = new File(telegramX_path);
      String[] files_array = files_path.list();
      if(files_array != null){
      if(files_array.length > 0){
        output = files_array;
      } else {
        output = "Files_array not working at all";
      }
      } else {
      output = "Files_array == null";
      }
      promise.resolve(output);
    } catch (IOException e) {
      promise.reject("Something went wrong: ","what is happening: ", e);
    }
}
@ReactMethod
  public void get_path(Promise promise){
    try{
      promise.resolve(telegramX_path);
    } catch(Exception e){
      promise.reject("Something Wrong", "Could not know it",e);
    }
  }


}
