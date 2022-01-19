import { useState } from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';

import { styles } from './styles';

export function SignIn() {
  const [text, setText] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <Text>Sign In</Text>

      <TextInput 
        style={styles.input} 
        onChangeText={setText}
      />

      <Text>
        Você digitou: { text }
      </Text>
    </SafeAreaView>
  );
};