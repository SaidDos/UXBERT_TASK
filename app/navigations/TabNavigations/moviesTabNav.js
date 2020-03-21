import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import SearchMoviesScreen from '../../screens/searchMoviesScreen';
import FavouriteMoviesScreen from '../../screens/favouriteMoviesScreen';
import colors from '../../utils/colors';

// the only tab navigation in the project which consists of just 2 screens (SearchMoviesScreen, FavouriteMoviesScreen)
const MoviesTabNav = createBottomTabNavigator(
  {
    SearchMoviesScreen: {
      screen: SearchMoviesScreen,
      navigationOptions: {
        tabBarLabel: 'Search Movies',
      },
    },
    FavouriteMoviesScreen: {
      screen: FavouriteMoviesScreen,
      navigationOptions: {
        tabBarLabel: 'Favourites',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'SearchMoviesScreen') {
          iconName = 'ios-search';
        } else if (routeName === 'FavouriteMoviesScreen') {
          iconName = 'md-heart';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.APP_THEME_COLOR,
      inactiveTintColor: colors.GREY,
    },
  },
);

export default createAppContainer(MoviesTabNav);
