import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { font_color, primary_color } from './src/constants/colors';
import Routes from './src/routes/Routes';
import{useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoMono-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
    'RobotoMono-Light': require('./assets/fonts/RobotoMono-Light.ttf'),
    'RobotoMono-Bold': require('./assets/fonts/RobotoMono-Bold.ttf')
  })
  
  const onLayoutRootView = useCallback( async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
      }},
    [fontsLoaded],
  )
  onLayoutRootView()
  if (!fontsLoaded) {
    return null
  }
  
  
  
  
  return (
    <View style={styles.container}>
      <Routes/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: primary_color
  },
  test:{ 
    color: font_color,
    fontSize:16
  }
})

