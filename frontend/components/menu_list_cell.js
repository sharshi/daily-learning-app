/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const MenuListCell = ( { item } ) => {

  return (
    <View style={styles.item}>
      <Text style={styles.left}>{item.title_he}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginHorizontal: 16,
  },
  left: {
    textAlign: 'left',
  }
});

export default MenuListCell;
