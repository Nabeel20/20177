import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, NativeModules } from 'react-native';
const { Storage } = NativeModules
function MyComponent() {
    const [data, setData] = React.useState({build: 40, feeling:'Hope', tryAgain: true});
    //* we return a a promise form native
    async function get_Files() {
        let files = await Storage.get_files_list();
        setData(files)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={()=> get_Files()}>Get external path</Text>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </View>
    )
}


export default MyComponent


