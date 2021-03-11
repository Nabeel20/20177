import 'react-native-gesture-handler';
import * as React from 'react';
import { View, StyleSheet, Text, FlatList, I18nManager } from 'react-native';
import RNFS from 'react-native-fs'
function MyComponent(){
  const [isloading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState('error message: none')
 const [data, setData] = React.useState({stat:'none', trying:true})

  React.useEffect(() => {

    async function fetch_quiz() {
      try {
        return files = await readDir(RNFS.DownloadDirectoryPath);
      } catch (error) {
        setErrorMessage(JSON.stringify(error))
      }
    }



    if(fetch_quiz().length > 0){
      setData(fetch_quiz());
      setIsLoading(false)
    }else{
      setData({stat:'failed array is empty?', feeling: 'sad'});
      setIsLoading(false)
    }
  }, [])
  
  
  
 
  if (isloading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>جاري التحميل ثوان من فضلك v38</Text>
      <Text>{errorMessage}</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      </View>
    )
  }
  
   if (!isloading) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>النتيجة: v38</Text>
        <Text>{errorMessage}</Text>
      <Text>---------------</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      </View>
    )
  }
  
  
  
  
  
}


 


export default MyComponent


