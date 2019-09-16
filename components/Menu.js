import React from 'react';
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Menu extends React.Component {
  static screenHeight = Dimensions.get('window').height;

  state = {
    top: new Animated.Value(Menu.screenHeight)
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: Menu.screenHeight
    }).start();
  };

  render() {
    return (
      <AnimatedContainer top={this.state.top}>
        <Cover></Cover>
        <TouchableOpacity onPress={this.toggleMenu}>
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content></Content>
      </AnimatedContainer>
    );
  }
}

export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: ${props => props.top};
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
`;

const Content = styled.View`
  height: ${Menu.screenHeight};
  background: #f0f3f5;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
`;
