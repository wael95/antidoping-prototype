import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import HDR from './Header111';
export default class About extends React.Component {
  static navigationOptions={
    drawerLabel: 'عن اللجنة',
  }
  render() {
    return (
      <View >
      <HDR body="عن اللجنة" nav={this.props.navigation} />
        <Text >عن اللجنة</Text>
      </View>
    );
  }
}
