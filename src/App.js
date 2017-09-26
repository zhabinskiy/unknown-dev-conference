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
      icon: require('./Ic_star.png'),
      selectedIcon: require('./Ic_star_active.png'),
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
    tabBarLabelColor: '#3843e9',
    tabBarBackgroundColor: '#fffff8',
  },
});
