import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, NativeModules } from 'react-native';
const { Storage } = NativeModules
function MyComponent() {
    const [data, setData] = React.useState('another try -__-');
    const [clicked,setClicked] = React.useState('not clicked yet')
    //* we return a a promise form native
    async function get_Files() {
        try {
            let files = await Storage.get_files_list();
            setData(files);
        } catch (error) {
            setClicked('error has happened :' + JSON.stringify(error))
        }
        setClicked('has clicked')
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => get_Files()} title="getData" />
            <Text>{clicked}</Text>
            <Text>{data}</Text>
        </View>
    )
}


export default MyComponent


