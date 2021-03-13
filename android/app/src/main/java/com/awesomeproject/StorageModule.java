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

import java.util.*;
import java.io.*;

public class StorageModule extends ReactContextBaseJavaModule {
  StorageModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "Storage";
  }

  @ReactMethod
  public void get_files_paths(Promise promise) {
    try {
      String path = "/storage/emulated/0/Download";
      File files = new File(path);

      FilenameFilter filter = new FilenameFilter() {
        @Override
        public boolean accept(File f, String name) {
          return name.endsWith(".quiz");
        }
      };

      File[] files_array = files.listFiles(filter);
      ArrayList < String > files_output = new ArrayList < String > ();
      for (File file: files_array) {
        String file_path = file.getAbsolutePath();
        files_output.add(file_path);
      }

      promise.resolve(files_output);
    } catch (Exception e) {
      promise.reject("Something went wrong: ", "what is happening: ", e);
    }
  }
}

