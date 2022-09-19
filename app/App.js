
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import RootNavigator from './navigation/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen'
import { colors } from './ui/styles/base';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
        <StatusBar barStyle='light-content' backgroundColor={colors.LIGHT_BLUE}/>
        <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
