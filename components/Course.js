import React from 'react';
import styled from 'styled-components';

import background from '../assets/background5.jpg';
import avatar from '../assets/avatar.jpg';

const Course = ({ title, subtitle, image, logo, author, avatar, caption }) => (
  <Container>
    <Cover>
      <Image source={image} />
      <Logo source={logo} resizeMode="contain" />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Avatar source={avatar} />
      <Caption>{caption}</Caption>
      <Author>Taught by {author}</Author>
    </Content>
  </Container>
);

const Container = styled.View`
  width: 335px;
  height: 335px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  margin: 15px 10px;
`;

const Cover = styled.View`
  height: 260px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  width: 200px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
  max-width: 260px;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;

export default Course;
