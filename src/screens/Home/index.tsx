import { View } from 'react-native';
import React from 'react';

import { styles } from './styles';
import { Profile } from '../../components/Profile';

export const Home = () => {
  return (
    <View>
      <View style={styles.header}>
          <Profile />
      </View>
    </View>
  );
};
