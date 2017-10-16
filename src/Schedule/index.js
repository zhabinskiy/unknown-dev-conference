import React, { Component } from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { LoginManager } from 'react-native-fbsdk';
import styled from 'styled-components/native';
import Tabs from './Tabs';
import { Day1, Day2 } from './Days';

const Wrapper = styled.View``;

const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
  background: #fffff8;
`;

export default class Schedule extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'FILTER',
        id: 'filter',
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      accessToken: null,
      user: {
        id: null,
        name: null,
        photo: null,
      },
      selectedTabIndex: 0,
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    try {
      AsyncStorage.multiGet(['accessToken', 'userId', 'userName', 'userPhoto']).then((value) => {
        this.setState({
          accessToken: value[0][1],
          user: {
            id: value[1][1],
            name: value[2][1],
            photo: value[3][1],
          },
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'filter') {
      }
    }
  }

  selectTab(index) {
    this.setState({ selectedTabIndex: index });
  }

  logout() {
    LoginManager.logOut();
    AsyncStorage.multiRemove(['accessToken', 'userId', 'userName', 'userPhoto']);
    this.setState({
      accessToken: null,
      user: {
        id: null,
        name: null,
        photo: null,
      },
    });
    Navigation.showModal({
      screen: 'UnknownDevConference.Login',
      title: 'Login',
      navigatorStyle: {
        navBarHidden: true,
      },
      animationType: 'slide-up',
    });
  }

  render() {
    return (
      <Wrapper>
        <StatusBar barStyle="light-content" />
        <Tabs
          onPressDay1={() => this.selectTab(0)}
          onPressDay2={() => this.selectTab(1)}
          selectedTabIndex={this.state.selectedTabIndex}
        />
        <ScrollView>{!this.state.selectedTabIndex ? <Day1 /> : <Day2 />}</ScrollView>
      </Wrapper>
    );
  }
}
