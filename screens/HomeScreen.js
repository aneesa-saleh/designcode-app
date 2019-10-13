import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';
import styled from 'styled-components';
import Card from '../components/card';
import { NotificationIcon } from '../components/Icons';
import Course from '../components/Course';

import cardBackround from '../assets/background2.jpg';
import reactLogo from '../assets/logo-react.png';
import avatar from '../assets/avatar.jpg';
import framerxLogo from '../assets/logo-framerx.png';
import figmaLogo from '../assets/logo-figma.png';
import studioLogo from '../assets/logo-studio.png';
import swiftLogo from '../assets/logo-swift.png';
import sketchLogo from '../assets/logo-sketch.png';

import Logo from '../components/Logo';
import Menu from '../components/Menu';

function mapStateToProps({ menu }) {
  return { menu };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: 'OPEN_MENU'
      })
  };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1)
  };

  componentDidUpdate(prevProps) {
    if (prevProps.menu !== this.props.menu) {
      this.toggleMenu();
    }
  }

  toggleMenu = () => {
    if (this.props.menu == 'open') {
      Animated.spring(this.state.scale, {
        toValue: 0.9
      }).start();
    }

    if (this.props.menu == 'closed') {
      Animated.spring(this.state.scale, {
        toValue: 1
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ transform: [{ scale: this.state.scale }] }}>
        <Menu />
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <TouchableAvatar onPress={this.props.openMenu}>
                <Avatar source={avatar} />
              </TouchableAvatar>
              <Title>Welcome back</Title>
              <Name>Mengi</Name>
              <StyledNotificationIcon />
            </TitleBar>
            <LogoWrapper horizontal showsHorizontalScrollIndicator={false}>
              {logos.map((logo, index) => (
                <Logo key={index} {...logo} />
              ))}
            </LogoWrapper>
            <Subtitle>Continue Learning</Subtitle>
            <CardWrapper horizontal showsHorizontalScrollIndicator={false}>
              {cards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </CardWrapper>
            <Subtitle>Related Courses</Subtitle>
            <CoursesWrapper>
              {courses.map((course, index) => (
                <Course key={index} {...course} />
              ))}
            </CoursesWrapper>
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const LogoWrapper = styled.ScrollView`
  flex-direction: row;
  padding: 20px;
  padding-left: 10px;
  padding-top: 30px;
`;

const CoursesWrapper = styled.ScrollView`
  /* flex-direction: row; */
  padding: 20px;
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

const TouchableAvatar = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 22px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

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

const cards = [
  {
    title: 'React Native for Designers',
    image: require('../assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: reactLogo
  },
  {
    title: 'Styled Components',
    image: require('../assets/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: reactLogo
  },
  {
    title: 'Props and Icons',
    image: require('../assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: reactLogo
  },
  {
    title: 'Static Data and Loop',
    image: require('../assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: reactLogo
  }
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Design an interactive prototype'
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site'
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool'
  }
];
