/**
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { parshios } from "./frontend/util/torah_util";

const App: () => React$Node = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    parshios()
      .then(res => res.json())
      .then(json => {
        console.log(json)
        return setData(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },[]);

  // if (!data) return null;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              keyExtractor={({ item }, index) => item}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.left}>{item.title_he}</Text>
                  <Text>{item.description}</Text>
                </View>
              )}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  item: {
    backgroundColor: '#F2E9CE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  left: {
    textAlign: 'left',
  }
});

export default App;
