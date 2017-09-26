import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Login from './Login';
import Schedule from './Schedule';

// Looking for access token
try {
  AsyncStorage.getItem('accessToken').then((value) => {
    if (value === null) {
      // Show Login modal if user not logged in
      Navigation.showModal({
        screen: 'UnknownDevConference.Login',
        title: 'Login',
        navigatorStyle: {
          navBarHidden: true,
        },
        animationType: 'slide-up',
      });
    }
  });
} catch (error) {
  console.log(error);
}

// Start App
function registerScreens() {
  Navigation.registerComponent('UnknownDevConference.Login', () => Login);
  Navigation.registerComponent('UnknownDevConference.Schedule', () => Schedule);
}

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      title: 'Schedule',
      label: 'Schedule',
      screen: 'UnknownDevConference.Schedule',
      icon: require('./images/Ic_star.png'),
      selectedIcon: require('./images/Ic_star_active.png'),
      navigatorStyle: {
        navBarTextColor: '#fff800',
        navBarTextFontSize: 18,
        navBarTextFontFamily: 'CircularStd-Bold',
        navBarBackgroundColor: '#3843e9',
        navBarButtonColor: '#ffffff',
        navBarNoBorder: true,
      },
    },
    {
      title: 'My UDC',
      label: 'My UDC',
      screen: 'UnknownDevConference.Schedule',
      icon: require('./images/Ic_circle.png'),
      selectedIcon: require('./images/Ic_circle_active.png'),
      navigatorStyle: {
        navBarTextColor: '#fff800',
        navBarTextFontSize: 18,
        navBarTextFontFamily: 'CircularStd-Bold',
        navBarBackgroundColor: '#3843e9',
        navBarButtonColor: '#ffffff',
        navBarNoBorder: true,
      },
    },
    {
      title: 'Demos',
      label: 'Demos',
      screen: 'UnknownDevConference.Schedule',
      icon: require('./images/Ic_rectangle.png'),
      selectedIcon: require('./images/Ic_rectangle_active.png'),
      navigatorStyle: {
        navBarTextColor: '#fff800',
        navBarTextFontSize: 18,
        navBarTextFontFamily: 'CircularStd-Bold',
        navBarBackgroundColor: '#3843e9',
        navBarButtonColor: '#ffffff',
        navBarNoBorder: true,
      },
    },
    {
      title: 'Videos',
      label: 'Videos',
      screen: 'UnknownDevConference.Schedule',
      icon: require('./images/Ic_triangle.png'),
      selectedIcon: require('./images/Ic_triangle_active.png'),
      navigatorStyle: {
        navBarTextColor: '#fff800',
        navBarTextFontSize: 18,
        navBarTextFontFamily: 'CircularStd-Bold',
        navBarBackgroundColor: '#3843e9',
        navBarButtonColor: '#ffffff',
        navBarNoBorder: true,
      },
    },
    {
      title: 'Info',
      label: 'Info',
      screen: 'UnknownDevConference.Schedule',
      icon: require('./images/Ic_hexagon.png'),
      selectedIcon: require('./images/Ic_hexagon_active.png'),
      navigatorStyle: {
        navBarTextColor: '#fff800',
        navBarTextFontSize: 18,
        navBarTextFontFamily: 'CircularStd-Bold',
        navBarBackgroundColor: '#3843e9',
        navBarButtonColor: '#ffffff',
        navBarNoBorder: true,
      },
    },
  ],
  tabsStyle: {
    tabBarButtonColor: '#a4aab3',
    tabBarSelectedButtonColor: '#3843e9',
    tabBarLabelColor: '#a4aab3',
    tabBarSelectedLabelColor: '#3843e9',
    tabBarBackgroundColor: '#fffff8',
  },
});
