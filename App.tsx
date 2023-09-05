import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/Routes';
import{useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { ThemeContext, ThemeProvider } from './src/themes/ThemeContext';
import React from 'react';
import { lightPalette } from './src/themes/palettes';


SplashScreen.preventAutoHideAsync();
export default function App() {

  const currentTheme = React.useContext(ThemeContext).currentTheme || lightPalette



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
  
  const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: currentTheme.primary_color
    },
    test:{ 
      color: currentTheme.font_color,
      fontSize:16
    }
  })
    
  return (
    <ThemeProvider >
      <View style={styles.container}>
        <Routes/>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}



