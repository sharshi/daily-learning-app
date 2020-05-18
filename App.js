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

import MenuListCell from "./frontend/components/menu_list_cell";
import Separator from "./frontend/components/pieces/separator";

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

  Hi(new Date("04/25/2020"));

  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            {isLoading ? <ActivityIndicator /> : (
              
              <FlatList
                data={data}
                renderItem={({ item }) => <MenuListCell item={item} />}
                keyExtractor={item => item.description}
                ItemSeparatorComponent={() => <Separator />}
              />

            )}
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  component: {
    height: 70
  },
});

export default App;
