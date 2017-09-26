import React, { Component } from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Tabs from './Tabs';

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  background: #fffff8;
`;

const Title = styled.Text``;

export default class Schedule extends Component {
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
    this.selectTab = this.selectTab.bind(this);
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

  selectTab(index) {
    this.setState({ selectedTabIndex: index });
  }

  render() {
    return (
      <Wrapper>
        <StatusBar barStyle="light-content" />
        <Tabs
          onPressDay1={() => this.selectTab(0)}
          onPressDay2={() => this.selectTab(1)}
          isSelectedTabIndex={this.state.selectedTabIndex}
        />
        {!this.state.selectedTabIndex ? <Title>Day 1</Title> : <Title>Day 2</Title>}
      </Wrapper>
    );
  }
}
