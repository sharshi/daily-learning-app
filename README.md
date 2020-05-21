# Daily Learning App

![Android build](https://github.com/sharshi/daily-learning-app/workflows/Android%20build/badge.svg?branch=master)
![Xcode build](https://github.com/sharshi/daily-learning-app/workflows/Xcode%20build/badge.svg)

React Native Frontend for the Daily Learning API

`npx react-native init AwesomeProject`

to edit android bundle id: https://stackoverflow.com/a/53428199/2140793

 1. `yarn add @react-navigation/native`
 2. `yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`
 3. `npx pod-install ios`
 4. top of entry point : `import 'react-native-gesture-handler';`

```
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```
 5. continue setup here: https://reactnavigation.org/docs/getting-started

## Release: 
 1. react-native run-android --variant=release
 2. Then APK can be found in android/app/build/outputs/apk/release
