import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, NativeModules } from 'react-native';
const { Storage } = NativeModules
function MyComponent() {
    const [data, setData] = React.useState('Press to get path')
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => Storage.getFilesPath().then(v => setData(v))}>Get external path</Text>
            <Text>{JSON.stringify(data,null,2)}</Text>
        </View>
    )
}


export default MyComponent


