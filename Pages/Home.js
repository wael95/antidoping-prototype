import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
  Fab,
  Icon,
  Button,
  Container,
  Content,
  ListItem,
  Left,
  Right,
  Body,
  Thumbnail,
} from 'native-base';

import Header from './Header';
import Collapseibl from './collapsedItem';
import HDR from './Header111';
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }
  static navigationOptions = {
    drawerLabel: 'الرئيسية',
  };

  render() {
    return (
      <Container  >
        <HDR body='بيانات الكشف عن المنشطات' nav={this.props.navigation} />
        <Content >
          <Collapseibl color='#ecf0f1' />
          <Collapseibl color='#bdc3c7' />
          <Collapseibl color='#95a5a6' />
          <Collapseibl color='#ecf0f1' />
        </Content>
        <Fab
          active={this.state.active}
          direction="right"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomLeft"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="share" />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-instagram" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-twitter" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="logo-youtube" />
          </Button>
        </Fab>
      </Container>
    );
  }
}
