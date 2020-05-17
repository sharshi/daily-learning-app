/**
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import { Header, ListItem } from 'react-native-elements';

import { parshios } from "./frontend/util/torah_util";
import Hi from "./frontend/util/calendar";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    parshios()
      .then(res => res.json())
      .then(json => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },[]);

  Hi();

  return (
    <>
      <StatusBar barStyle="dark-content" />
        <Header
          statusBarProps={{ barStyle: 'light-content', translucent: true }}
          leftComponent={{ icon: 'settings', color: '#fff' }}
          centerComponent={{ 
            text: 'Daily Learning', 
            style: { color: '#fff' } 
          }}
          />
        <SafeAreaView>
          <ScrollView>
          <View>
            {isLoading ? <ActivityIndicator /> : (
              data.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.title_he}
                  subtitle={l.description}
                  bottomDivider
                />
              ))
            )}
          </View>
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSpacing: {
    height: 70
  },
});

export default App;
