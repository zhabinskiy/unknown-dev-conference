import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  background: #3843e9;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image``;

const Title = styled.Text`
  font-family: CircularStd-Bold;
  font-size: 36px;
  line-height: 38px;
  color: #fff;
  text-align: center;
  margin-top: 36px;
`;

const Subtitle = styled.Text`
  font-family: BasisGrotesqueProMono-Bold;
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin-top: 19px;
`;

const Line = styled.View`
  width: 1px;
  height: 56px;
  background: #fff;
  margin-top: 60px;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  background: #fff;
  height: 56px;
  border-radius: 2px;
  bottom: 20px;
`;

const Logo = styled.Image`
  position: absolute;
  left: 20px;
`;

const Label = styled.Text`
  position: relative;
  bottom: 1px;
  font-family: CircularStd-Bold;
  font-size: 16px;
  color: #3843e9;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTapped: false,
    };

    this.buttonTapped = this.buttonTapped.bind(this);
  }

  buttonTapped() {
    this.setState(prevState => ({
      isTapped: !prevState.isTapped,
    }));
  }

  render() {
    return (
      <Wrapper>
        <StatusBar barStyle="light-content" />
        <Image source={require('./circle1.png')} />
        <Image source={require('./circle2.png')} style={{ marginTop: 66 }} />
        <Title>Unknown Dev Conference</Title>
        <Subtitle>APRIL 18 + 19 / SAN JOSE, CALIFORNIA</Subtitle>
        <Line />
        {this.state.isTapped ? (
          <Button onPress={this.buttonTapped}>
            <Image source={require('./loader.gif')} />
          </Button>
        ) : (
          <Button onPress={this.buttonTapped}>
            <Logo source={require('./facebook.png')} />
            <Label>Sign In with Facebook</Label>
          </Button>
        )}
      </Wrapper>
    );
  }
}

export default App;
