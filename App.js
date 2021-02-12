import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider as PaperProvider, Surface, TouchableRipple } from 'react-native-paper';
import { View, StyleSheet, Text, FlatList, I18nManager } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Force RTL
I18nManager.forceRTL(true);

const theme = {
  colors: {
    primary: 'white'
  }
};


const MyComponent = () => {
  const Stack = createStackNavigator();
  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function Home(){
    const nabeel = [
        {
            title: 'ضخامة الكبد والطحال',
            subtitle: 'مهارات سريرية',
            questions_number: 60,
            time: '03:24'
        },
        {
            title: 'مقاربة مريض النفسية',
            subtitle: 'مهارات سريرية',
            questions_number: 25,
            time: '01:15'
        },
        {
            title: 'أصوات القلب',
            subtitle: 'قلبية',
            questions_number: 90,
            time: '05:02'
        }, {
            title: 'ضخامة الكبد والطحال',
            subtitle: 'مهارات سريرية',
            questions_number: 60,
            time: '03:24'
        },
        {
            title: 'مقاربة مريض النفسية',
            subtitle: 'مهارات سريرية',
            questions_number: 25,
            time: '01:15'
        },
        {
            title: 'أصوات القلب',
            subtitle: 'قلبية',
            questions_number: 90,
            time: '05:02'
        }, {
            title: 'ضخامة الكبد والطحال',
            subtitle: 'مهارات سريرية',
            questions_number: 60,
            time: '03:24'
        },
        {
            title: 'مقاربة مريض النفسية',
            subtitle: 'مهارات سريرية',
            questions_number: 25,
            time: '01:15'
        },
        {
            title: 'أصوات القلب',
            subtitle: 'قلبية',
            questions_number: 90,
            time: '05:02'
        }, {
            title: 'ضخامة الكبد والطحال',
            subtitle: 'مهارات سريرية',
            questions_number: 60,
            time: '03:24'
        },
        {
            title: 'مقاربة مريض النفسية',
            subtitle: 'مهارات سريرية',
            questions_number: 25,
            time: '01:15'
        },
        {
            title: 'أصوات القلب',
            subtitle: 'قلبية',
            questions_number: 90,
            time: '05:02'
        }]
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={nabeel}
                renderItem={({ item }) =>

                (<TouchableRipple
                    onPress={() => navigation.push('Details')}
                    rippleColor="rgba(0, 0, 0, .32)"
                    style={{ margin: 6, borderRadius: 7 }}
                >
                    <Surface style={styles.container}>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Text style={styles.numbers}>{item.questions_number}</Text>
                                <Octicons name="list-ordered" size={16} color="grey" style={{ marginLeft: 5 }} />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.numbers}>{item.time}</Text>
                                <Octicons name="clock" size={16} color="grey" style={{ marginLeft: 5 }} />
                            </View>

                        </View>
                    </Surface>

                </TouchableRipple>)
                }
            />
        </View >
    )
  }


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Overview' }} />
        </Stack.Navigator>

      </NavigationContainer>
    </PaperProvider>
  )
};

export default MyComponent

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: '100%',
    //   backgroundColor: '#f4f4f5',
    paddingTop: 10,
  },
  item: {
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});

