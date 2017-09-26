import React from 'react';
import styled from 'styled-components/native';

const Tabs = styled.View`
  justify-content: center;
  width: 100%;
  background: #3843e9;
  flex-direction: row;
`;

const Tab = styled.TouchableOpacity`
  padding: 3px 10px 8px 10px;
  margin: 0 5px;
  border-bottom-width: 3px;
  border-bottom-color: ${props => (props.isSelected ? '#ff02cc' : '#3843e9')};
`;

const Label = styled.Text`
  font-family: BasisGrotesqueProMono;
  font-size: 12px;
  color: #ffffff;
  opacity: ${props => (props.isSelected ? '1' : '0.7')};
`;

export default props => (
  <Tabs>
    <Tab onPress={props.onPressDay1} isSelected={!props.isSelectedTabIndex}>
      <Label isSelected={!props.isSelectedTabIndex}>DAY 1</Label>
    </Tab>
    <Tab onPress={props.onPressDay2} isSelected={props.isSelectedTabIndex}>
      <Label isSelected={props.isSelectedTabIndex}>DAY 2</Label>
    </Tab>
  </Tabs>
);
