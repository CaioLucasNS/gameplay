import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { Background } from './src/components/Background/Background';
import { Routes } from './src/routes';

export default function App() {
  // carregamento das fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  // AppLoading segura a tela de splash
  if (!fontsLoaded) return <AppLoading />;

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
