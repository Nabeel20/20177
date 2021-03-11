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
        let output = fetch_quiz()


        if (output.length > 0) {
            setData(output);
            setIsLoading(false)
        } else {
            setData({ stat: 'failed array is empty?', feeling: 'sad' });
            setIsLoading(false)
        }
    }, [])

  
  
  
 
  if (isloading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>جاري التحميل ثوان من فضلك</Text>
                <Text>{errorMessage}</Text>
                <Text>{JSON.stringify(data, null, 2)}</Text>
            </View>
        )
    }


        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text>النتيجة:</Text>
                <Text>{errorMessage}</Text>
                <Text>---------------</Text>
                <Text>{JSON.stringify(data, null, 2)}</Text>
            </View>
        )
  
  
  
  
}


 


export default MyComponent


