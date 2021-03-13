import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, NativeModules,Button  } from 'react-native';
const { Storage } = NativeModules
function MyComponent() {
    const [data, setData] = React.useState('another try -__-');
    const [ path,setPath] = React.useState('path: click button first');
    const [clicked, setClicked] = React.useState('not clicked yet');
    const [visible,setVisible] = React.useState(false);
    const[fileList,setFileList] = React.useState('No files')
    async function get_Files() {
        try {
            let files = await Storage.get_files_list();
            if(files.length > 0){
                setData(files);
            }else{
                setData('Nothing here')
            }
        } catch (error) {
            setClicked('error has happened :' + JSON.stringify(error))
        }
        setClicked('has clicked')
    }
    function get_promise_path(){
        Storage.get_path().then(value=>{
            if(value != null || undefined){
                setPath(`path is: => ${value}`)
            } 
        })
    }
    function get_async_path(){
        let path = await Storage.get_path();
        if(path != null || undefined){
            setPath(`path is: ${JSON.stringify(path)}`)
        } else {
            setPath('path = null || undefined')
        }
    }
    React.useEffect(()=>{
        async function get_file_list(){
            let file = Storage.get_files_list();
            if(file != null || undefined){
                setFileList(JSON.stringify(file));
                setVisible(true)
            } else {
                setFileList('file list == null || undefined')
                setVisible(true)
            }
        }
        get_file_list()
    },[])
    return (
        <View style={{ flex: 1, alignItems: 'center', padding:5 }}>
            <Button style={{margin:3}} onPress={() => get_Files()} title="getData" />
            <Button style={{margin:3}} onPress={() => get_promise_path()} title="getData" />
            <Button style={{margin:3}} onPress={() => get_async_path()} title="getData" />
            <Text>{clicked}</Text>
            <Text>---------</Text>
            <Text>{data}</Text>
            <Text>---------</Text>
            <Text>{path}</Text>
            <Text>----------</Text>
            {visible ? <Text>{fileList}</Text>:<Text>UseEffect not working too!</Text>}
        </View>
    )
}


export default MyComponent


