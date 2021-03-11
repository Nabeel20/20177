import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';
function MyComponent(){
       return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Dirs.CacheDir: {Dirs.CacheDir}</Text>
                <Text>Dirs.DatabaseDir: {Dirs.DatabaseDir}</Text>
                <Text>Dirs.DocumentDir: {Dirs.DocumentDir}</Text>
                <Text>Dirs.CacheDir: {Dirs.MainBundleDir}</Text>
            </View>
        )
}

export default MyComponent


