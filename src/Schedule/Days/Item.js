import React, { Component } from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  margin: 15px 0;
  flex-direction: row;
`;

const Symbol = styled.Image`
  position: relative;
  left: 1px;
`;

const Data = styled.View`
  position: relative;
  bottom: 4px;
  margin-left: 26px;
`;

const Time = styled.Text`
  font-family: BasisGrotesqueProMono-Bold;
  font-size: 12px;
  color: #ff02cc;
  line-height: 22px;
`;

const Title = styled.Text`
  font-family: CircularStd-Book;
  font-size: 16px;
  color: #333333;
  line-height: 22px;
`;

const Category = styled.Text`font-family: CircularStd-Bold;`;

const Subtitle = styled.Text`
  opacity: 0.6;
  font-family: CircularStd-Book;
  font-size: 14px;
  color: #333333;
  line-height: 22px;
  margin-top: 3px;
`;

// export default ({ time, category, children, location, symbol }) => (

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { time, category, children, location } = this.props;

    let symbol;

    switch (category) {
      case 'Growth Marketing':
        symbol = require('./images/1.png');
        break;
      case 'IT':
        symbol = require('./images/2.png');
        break;
      case 'Social Media Marketing':
        symbol = require('./images/3.png');
        break;
      default:
        symbol = require('./images/1.png');
    }

    return (
      <Wrapper>
        <Symbol source={symbol} />
        <Data>
          <Time>{time}</Time>
          <Title>
            <Category>{category}</Category>: {children}
          </Title>
          <Subtitle>{location}</Subtitle>
        </Data>
      </Wrapper>
    );
  }
}
