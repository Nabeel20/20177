package com.balsamexpo;



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

  @ReactMethod
  public void getFilesPath(Promise promise) {
    try {
        promise.resolve(Environment.getExternalStorageDirectory().getAbsolutePath());
    } catch(Exception e) {
        promise.reject("Create Event Error", e);
    }
}
}
