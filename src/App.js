import React, { Component } from 'react';
import { AsyncStorage, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
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
        name: '',
      },
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    AsyncStorage.removeItem('accessToken');
    this.setState({
      accessToken: '',
    });
  }

  render() {
    try {
      AsyncStorage.getItem('accessToken')
        .then((value) => {
          this.setState({ accessToken: value });
        })
        .done();
    } catch (error) {
      console.log(error);
    }

    return (
      <Wrapper>
        {this.state.accessToken ? (
          <TouchableOpacity onPress={this.logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        ) : (
          <Login />
        )}
      </Wrapper>
    );
  }
}

export default App;
