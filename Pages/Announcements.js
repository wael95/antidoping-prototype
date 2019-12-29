import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  Text,
  Fab,
  Icon,
  Button,
  Container,
  Content,
  Card,
  CardItem,
} from 'native-base';
import { MapView, Location, Permissions } from 'expo';
import Header from './Header';
import HDR from './Header111';
export default class Announcements extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }
  static navigationOptions = {
    drawerLabel: 'إعلانات',
  };
  render() {
    return (
      <Container style={{ alignContent: 'center' }}>
        <HDR body="إعلانات" nav={this.props.navigation} />
        <Content>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../Photos/000gtu10.jpg')}
              style={{
                flex: 1,
                height: undefined,
                width: undefined,
                alignSelf: 'stretch',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../Photos/600.png')}
              style={{
                flex: 1,
                height: undefined,
                width: undefined,
                alignSelf: 'stretch',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../Photos/600000.png')}
              style={{
                flex: 1,
                height: undefined,
                width: undefined,
                alignSelf: 'stretch',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              borderWidth: 2,
              borderColor: '#e6e6e6',
              borderRadius: 9,
              alignItems: 'center',
              height: 120,
              alignSelf: 'stretch',
            }}>
            <Image
              source={require('../Photos/0.jpg')}
              style={{
                flex: 1,
                height: undefined,
                width: undefined,
                alignSelf: 'stretch',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
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

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginTop: 10,
    // borderWidth: 2,
    // borderColor: '#e6e6e6',
    // borderRadius: 9,
    alignItems: 'center',
    height: 120,
    alignSelf: 'stretch',
  },
});
