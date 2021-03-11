import 'react-native-gesture-handler';
import * as React from 'react';
import { View, StyleSheet, Text, FlatList, I18nManager } from 'react-native';
import RNFS from 'react-native-fs'
function MyComponent(){
  const [errorMessage, setErrorMessage] = React.useState('error message: none')
  const [data, setData] = React.useState({stat:'none', trying:true})



  
  
  
 
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
                <Text>---------------</Text>
                <Text>{JSON.stringify(data, null, 2)}</Text>
            </View>
        )
  
  
  
  
}


 


export default MyComponent


