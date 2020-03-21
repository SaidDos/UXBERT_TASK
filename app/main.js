import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MoviesTabNav from './navigations/TabNavigations/moviesTabNav';
import colors from './utils/colors';
import {Provider} from 'react-redux';
import store from '../app/store/configureStore';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.APP_THEME_COLOR}
        barStyle="dark-content"
      />
      <Provider store={store()}>
        <MoviesTabNav />
      </Provider>
    </SafeAreaView>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
