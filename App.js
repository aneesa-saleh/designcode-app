import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import Card from './components/card';

import cardBackround from './assets/background2.jpg';
import reactLogo from './assets/logo-react.png';
import avatar from './assets/avatar.jpg';

export default function App() {
  return (
    <Container>
      <ScrollView>
        <TitleBar>
          <Avatar source={avatar} />
          <Title>Welcome back</Title>
          <Name>Mengi</Name>
        </TitleBar>
        <Subtitle>Continue Learning</Subtitle>
        <CardWrapper horizontal showsHorizontalScrollIndicator={false}>
          <Card
            title="Styled Components"
            image={cardBackround}
            caption="React Native"
            logo={reactLogo}
            subtitle="5 of 12 sections"
          />
          <Card
            title="Styled Components"
            image={cardBackround}
            caption="React Native"
            logo={reactLogo}
            subtitle="5 of 12 sections"
          />
        </CardWrapper>
      </ScrollView>
    </Container>
  );
}

const CardWrapper = styled.ScrollView`
  padding-bottom: 30px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 22px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
