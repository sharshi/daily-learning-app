# daily-learning-app
React Native Frontend for the Daily Learning API

`npx react-native init AwesomeProject`

to edit android bundle id: https://stackoverflow.com/a/53428199/2140793

`yarn add @react-navigation/native`
`yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`
`npx pod-install ios`

top of entry point : `import 'react-native-gesture-handler';`
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
continue setup here: https://reactnavigation.org/docs/getting-started

![Android build](https://github.com/sharshi/daily-learning-app/workflows/Android%20build/badge.svg?branch=master)
![Xcode build](https://github.com/sharshi/daily-learning-app/workflows/Xcode%20build/badge.svg)


react-native run-android --variant=release
Then APK can be found in android/app/build/outputs/apk/release
