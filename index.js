/**
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { View, Text, AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: item.description,
    })
  }, [])
  // const { setParams } = navigation;
  // setParams({ title: "hwhghwgdh" })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{item.description}</Text>
    </View>
  );
}

DetailsScreen.navigationOptions = () => ({
  title: "wjjwj"
});

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Daily Learning" component={ App } />
        <Stack.Screen name="Details" component={ DetailsScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
