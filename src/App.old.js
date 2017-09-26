import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import Navigator from './Navigator';
import Login from './Login';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: '',
      user: {
        id: '',
        name: '',
        photo: '',
      },
    };
  }

  render() {
    try {
      AsyncStorage.multiGet(['accessToken', 'userId', 'userName', 'userPhoto'])
        .then((value) => {
          this.setState({
            accessToken: value[0][1],
            user: {
              id: value[1][1],
              name: value[2][1],
              photo: value[3][1],
            },
          });
        })
        .done();
    } catch (error) {
      console.log(error);
    }

    return <Wrapper>{this.state.accessToken ? <Navigator /> : <Login />}</Wrapper>;
  }
}

export default App;
