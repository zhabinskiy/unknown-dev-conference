import React from 'react';
import styled from 'styled-components/native';
import Item from './Item';

const Wrapper = styled.View``;

const Timeline = styled.View`
  position: absolute;
  margin-left: 32px;
  margin-top: 30px;
  width: 1px;
  height: 100%;
  background: #d8d8d4;
`;

const List = styled.View`margin: 15px 16px 15px 26px;`;

export default () => (
  <Wrapper>
    <Timeline />
    <List>
      <Item time="12:30" category="Growth Marketing" location="Room C – 50 min">
        Best Practices for Getting and Keeping an Audience
      </Item>
      <Item time="12:30" category="IT" location="Room C – 50 min">
        Best Practices for Getting and Keeping an Audience
      </Item>
      <Item time="12:30" category="Social Media Marketing" location="Room C – 50 min">
        Best Practices for Getting and Keeping an Audience
      </Item>
      <Item time="12:30" category="IT" location="Room C – 50 min">
        Best Practices for Getting and Keeping an Audience
      </Item>
      <Item time="12:30" category="Growth Marketing" location="Room C – 50 min">
        Best Practices for Getting and Keeping an Audience
      </Item>
    </List>
  </Wrapper>
);
