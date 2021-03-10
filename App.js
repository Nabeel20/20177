import 'react-native-gesture-handler';
import * as React from 'react';
import { View, StyleSheet, Text, FlatList, I18nManager } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';
function MyComponent(){
  const [isloading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState('error message: none')
  const [output,setOutput] = React.useState('')
  
  React.useEffect(() => {
    async function fetch_quizs() {
      const files =  await FileSystem.ls(Dirs.DocumentDir);
      if(files.length > 0){
              setOutput({statue: 'good', filesArray: files});
          setIsLoading(false)
      }
 setOutput({statue: 'bad', filesArray: 'empty'});
    }

 fetch_quizs()
   


  }, []) 
  
  
  
 
  if (isloading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>جاري التحميل ثوان من فضلك</Text>
      <Text>{errorMessage}</Text>
      </View>
    )
  }
  
   if (!isloading) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>النتيجة:</Text>
        <Text>{errorMessage}</Text>
      <Text>---------------</Text>
      <Text>{JSON.stringify(output, null, 2)}</Text>
      </View>
    )
  }
  
  
  
  
  
}


 


export default MyComponent

const styles = StyleSheet.create({

});

