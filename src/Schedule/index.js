import React, { Component } from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  background: #fffff8;
`;

const Tabs = styled.View`
  font-family: BasisGrotesqueProMono;
  font-size: 12px;
  color: #ffffff;
  padding-bottom: 10px;
`;

const Tab = styled.TouchableOpacity``;

const Label = styled.Text``;

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
    };

    this.logout = this.logout.bind(this);
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

  render() {
    return (
      <Wrapper>
        <StatusBar barStyle="light-content" />
        <Tabs>
          <Tab>
            <Label>Day 1</Label>
          </Tab>
          <Tab>
            <Label>Day 2</Label>
          </Tab>
        </Tabs>
      </Wrapper>
    );
  }
}
