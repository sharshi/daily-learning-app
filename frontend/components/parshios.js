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
  ActivityIndicator
} from 'react-native';

import MenuListCell from "./menu_list_cell";
import Separator from "./pieces/separator";

import { parshios } from "../util/torah_util";

const Parshios = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    parshios()
      .then(res => res.json())
      .then(json => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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

export default Parshios;
