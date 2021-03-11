import 'react-native-gesture-handler';
import * as React from 'react';
import { View, StyleSheet, Text, FlatList, I18nManager } from 'react-native';
import RNFS from 'react-native-fs'
function MyComponent(){
  const [isloading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState('error message: none')
  const [output,setOutput] = React.useState('')
  
React.useEffect(() => {
    async function fetch_quiz() {
      let quiz_array = []
      let files = await readDir(RNFS.DownloadDirectoryPath);
      for (let i = 0; i < files.length; i++) {
        if (files[i].name.includes('json')) {
          quiz_array.push(files[i])
        }
      }
      if (quiz_array.length > 0) {
        setOutput(quiz_array)
        setIsLoading(false)
      } else {
        setOutput({ statue: 'sad', tryAgain: true })
        setIsLoading(false)
      }
    }
    fetch_quiz()
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

