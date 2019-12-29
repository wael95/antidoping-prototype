import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Left, Right, Body, Icon } from 'native-base';
export default class HDR extends React.Component {
  render() {
    return (
      <Header>
        <Body>
          <Text
            style={{
              fontWeight: 'bold', 
            }}>
            {this.props.body ? this.props.body : ''}
          </Text>
        </Body>
        <Right>
          <Icon
            style={{ fontWeight: 'bold' }}
            onPress={() => this.props.nav.openDrawer()}
            name="menu"
          />
        </Right>
      </Header>
    );
  }
}
