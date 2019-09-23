import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import MenuItem from './MenuItem';

function mapStateToProps({ menu }) {
  return { menu };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: 'CLOSE_MENU'
      })
  };
}

class Menu extends React.Component {
  static screenHeight = Dimensions.get('window').height;

  state = {
    top: new Animated.Value(Menu.screenHeight)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.menu !== this.props.menu) {
      this.toggleMenu();
    }
  }

  toggleMenu = () => {
    const { menu } = this.props;
    if (menu === 'open') {
      this.openMenu();
    } else if (menu === 'closed') {
      this.closeMenu();
    }
  };

  openMenu = () => {
    Animated.spring(this.state.top, {
      toValue: 0
    }).start();
  };

  closeMenu = () => {
    Animated.spring(this.state.top, {
      toValue: Menu.screenHeight
    }).start();
  };

  render() {
    return (
      <AnimatedContainer top={this.state.top}>
        <Cover>
          <Image source={require('../assets/background2.jpg')} />
          <Title>Meng To</Title>
          <Subtitle>Designer at Design+Code</Subtitle>
        </Cover>
        <TouchableCloseView onPress={this.props.closeMenu}>
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableCloseView>
        <Content>
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

const items = [
  {
    icon: 'ios-settings',
    title: 'Account',
    text: 'settings'
  },
  {
    icon: 'ios-card',
    title: 'Billing',
    text: 'payments'
  },
  {
    icon: 'ios-compass',
    title: 'Learn React',
    text: 'start course'
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    text: 'see you soon!'
  }
];

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
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${Menu.screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

TouchableCloseView = styled.TouchableOpacity`
  position: absolute;
  top: 120px; /* cover height - (button height / 2) */
  left: 50%;
  margin-left: -22px;
  z-index: 1;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;
