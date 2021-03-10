import 'react-native-gesture-handler';
import * as React from 'react';
import { View, StyleSheet, Text, FlatList, I18nManager } from 'react-native';
import RNFS from 'react-native-fs'
function MyComponent(){
  const [isloading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState('error message: none')
  const [output,setOutput] = React.useState('')
  
  React.useEffect(() => {
    async function fetch_quizs() {
      let output = []
      let path = RNFS.DownloadDirectoryPath;
      try {
        let files_array = await RNFS.readDir(path)
        let quizs_array = files_array.filter(file => file.name.includes('json'))
        for (let index = 0; index < quizs_array.length; index++) {
          if (quizs_array[index].isFile()) {
            let quiz_data = await RNFS.readFile(quizs_array[index], 'utf8')
            output.push(quiz_data)
          }
        }
      } catch (error) {
        setErrorMessage(error)
      }
      return output
    }

if(fetch_quizs().length > 0){
  setOutput(fetch_quizs())
  setIsLoading(false)
} else {
  setOutput({statue:'something went wrong', feeling:'sad'})
}
   


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

