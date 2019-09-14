import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Card from './components/card';
import { NotificationIcon } from './components/Icons';

import cardBackround from './assets/background2.jpg';
import reactLogo from './assets/logo-react.png';
import avatar from './assets/avatar.jpg';
import framerxLogo from './assets/logo-framerx.png';
import figmaLogo from './assets/logo-figma.png';
import studioLogo from './assets/logo-studio.png';
import swiftLogo from './assets/logo-swift.png';
import sketchLogo from './assets/logo-sketch.png';

import Logo from './components/Logo';

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={avatar} />
            <Title>Welcome back</Title>
            <Name>Mengi</Name>
            <StyledNotificationIcon />
          </TitleBar>
          <LogoWrapper horizontal showsHorizontalScrollIndicator={false}>
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </LogoWrapper>
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
      </SafeAreaView>
    </Container>
  );
}

const LogoWrapper = styled.ScrollView`
  flex-direction: row;
  padding: 20px;
  padding-left: 10px;
  padding-top: 30px;
`;

const StyledNotificationIcon = styled(NotificationIcon)`
  position: absolute;
  right: 20px;
  top: 5px;
`;

const CardWrapper = styled.ScrollView`
  padding-bottom: 30px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
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

const logos = [
  {
    image: framerxLogo,
    text: 'Framer X'
  },
  {
    image: figmaLogo,
    text: 'Figma'
  },
  {
    image: studioLogo,
    text: 'Studio'
  },
  {
    image: reactLogo,
    text: 'React'
  },
  {
    image: swiftLogo,
    text: 'Swift'
  },
  {
    image: sketchLogo,
    text: 'Sketch'
  }
];
