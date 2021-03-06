import React, { Component } from 'react';
import { StatusBar, AlertIOS, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  position: relative;
  bottom: 0;
  background: #3843e9;
  flex: 1;
  width: 100%;
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

const Facebook = styled.Image`
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      isLoading: true,
    });

    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          this.setState({
            isLoading: false,
          });
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const accessToken = data.accessToken.toString();

            AsyncStorage.setItem('accessToken', accessToken);

            const responseInfoCallback = (err, res) => {
              if (err) {
                console.log(err);
              } else {
                // Set auth data to AsyncStorage
                AsyncStorage.multiSet([
                  ['userId', res.id.toString()],
                  ['userName', res.name.toString()],
                  ['userPhoto', res.picture.data.url.toString()],
                ]);
                // Close Login modal
                Navigation.dismissModal({
                  animationType: 'slide-down',
                });
                // Show Schedule tab
                this.props.navigator.resetTo({
                  screen: 'UnknownDevConference.Schedule',
                  title: 'Schedule',
                  label: 'Schedule',
                  icon: require('../images/Ic_star.png'),
                  selectedIcon: require('../images/Ic_star_active.png'),
                  animated: true,
                  animationType: 'fade',
                  navigatorStyle: {
                    navBarTextColor: '#fff800',
                    navBarTextFontSize: 18,
                    navBarTextFontFamily: 'CircularStd-Bold',
                    navBarBackgroundColor: '#3843e9',
                    navBarButtonColor: '#ffffff',
                    navBarNoBorder: true,
                  },
                });
              }
            };

            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken,
                parameters: {
                  fields: {
                    string: 'name, picture',
                  },
                },
              },
              responseInfoCallback,
            );

            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      (error) => {
        AlertIOS.alert('Error', `Login failed with error: ${error}`, () =>
          this.setState({
            isLoading: false,
          }),
        );
      },
    );
  }

  render() {
    return (
      <Wrapper>
        <StatusBar barStyle="light-content" />
        <Image source={require('./images/circle1.png')} />
        <Image source={require('./images/circle2.png')} style={{ marginTop: 66 }} />
        <Title>Unknown Dev Conference</Title>
        <Subtitle>APRIL 18 + 19 / SAN JOSE, CALIFORNIA</Subtitle>
        <Line />
        {this.state.isLoading ? (
          <Button disabled>
            <Image source={require('./images/loader.gif')} />
          </Button>
        ) : (
          <Button onPress={this.login}>
            <Facebook source={require('./images/facebook.png')} />
            <Label>Sign In with Facebook</Label>
          </Button>
        )}
      </Wrapper>
    );
  }
}

export default Login;
