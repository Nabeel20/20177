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
//File type == path 
     final String telegramX_path = "/storage/emulated/0/Android/data/org.thunderdog.challegram/files/documents";


  private boolean isValid(String name){
    if(name.endsWith(".quiz")){
      return true;
    } 
    return false;
  }

  @ReactMethod
  public void get_files_list(Promise promise){
    try {
      File files_path = new File(telegramX_path);
      String[] files_array = files_path.list();
      promise.resolve(files_array);
    } catch (Exception e) {
      promise.reject("Something went wrong nabeel", e.getMessage());
    }
}


}
