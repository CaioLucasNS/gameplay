import React from 'react';
import { ScrollView, Text } from 'react-native';
import { categories } from '../../utils/categories';

import { styles } from './styles';

export function CategorySelect() {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        // categories.map(category => (
        //   <Category

        //   />
        // ))
      }
    </ScrollView>
  );
}
