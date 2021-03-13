import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, NativeModules, FlatList } from 'react-native';
import { FileSystem } from 'react-native-file-access';
const { Storage } = NativeModules;
function MyComponent() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function get_database() {
            let paths = await Storage.get_files_paths();
            if (paths.length > 0) {
                for (let i = 0; i < paths.length; i++) {
                    let file = await FileSystem.readFile(paths[i]);
                    let file_output = JSON.stringify(file);
                    file_output.path = paths[i];
                    setData([...data, file_output]);
                }
            }
        }
        get_database();
        setLoading(false);
    }, [])

    if (loading) {
        return (
            
        )
    }

    return (
{visible?
           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>جاري التحميل ¯\_( ͡° ͜ʖ ͡°)_/¯</Text>
            </View>

:
        <View style={{ flex: 1, padding: 10 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>Title: {item.title}</Text>
                            <Text>Path: {item.path}</Text>
                            <Text>ــــــــــــــــــــツـــــــــــــــــ</Text>
                        </View>
                    )
                }}
            />
        </View> }
    )
}

export default MyComponent
