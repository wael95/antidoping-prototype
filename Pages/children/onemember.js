import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Text,
  Icon,
  ListItem,
  Left,
  Right,
  Body,
  Thumbnail,
} from 'native-base';

export default class Member extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      iscollapsed: true,
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: this.props.color,
          paddingVertical: 15,
          borderBottomColor: null,
         // borderRadius: 30,
          marginHorizontal:4,
          marginVertical:2,
        }}>
        <Left>
          <Text style={{ color: '#19181A', marginLeft: 15 }} note>
            {this.props.date}
          </Text>
        </Left>
        <Body>
          <Text style={{ fontWeight: 'bold', color: '#19181A' }}>
            {this.props.incomp ? 'داخل المنافسة' : 'خارج المنافسة'}
          </Text>
        </Body>
        <Right>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#19181A',
              marginRight: 10,
              fontSize: 20,
            }}>
            {this.props.name ? this.props.name : 'لا يوجد اسم'}
          </Text>
        </Right>
      </View>
    );
  }
}
