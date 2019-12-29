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
import Collapsible from 'react-native-collapsible';

import Member from './onemember';
export default class Club extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      iscollapsed: true,
      failuercolor: '#e74c3c',
      successcolor: '#2ecc71',
    };
  }

  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: this.props.color,
            borderBottomColor: null,
            //borderRadius: 30,
            marginHorizontal: 2,
            marginVertical: 3,
          }}>
          <ListItem
            style={{
              borderBottomColor: null,
              borderRadius: 30,
            }}
            onPress={() =>
              this.setState({ iscollapsed: !this.state.iscollapsed })
            }>
            <Left>
              <Icon
                style={{ fontWeight: 'bold', fontSize: 20 }}
                name="arrow-down"
              />
            </Left>
            <Body>
              <Text
                style={{ fontWeight: 'bold', color: '19181A', fontSize: 20 }}>
                {this.props.name}
              </Text>
            </Body>
            <Right>
              <Thumbnail style={{ marginRight: 10 }} source={this.props.uri} />
            </Right>
          </ListItem>
        </View>
        <View>
          <Collapsible collapsed={this.state.iscollapsed}>
            <Member
              name="علي شراحيلي"
              incomp={true}
              color={this.state.failuercolor}
              date="02/3/2018"
            />
            <Member
              name="أحمد المطيري"
              incomp={true}
              color={this.state.successcolor}
              date="02/3/2018"
            />
            <Member
              name="راجحي حامدي"
              incomp={false}
              color={this.state.failuercolor}
              date="02/3/2018"
            />
            <Member
              name="علي الحارثي"
              incomp={true}
              color={this.state.successcolor}
              date="02/3/2018"
            />
            <Member
              name="سلطان حسن"
              incomp={false}
              color={this.state.failuercolor}
              date="02/3/2018"
            />
            <Member
              name="علي الحارثي"
              incomp={true}
              color={this.state.successcolor}
              date="02/3/2018"
            />
            <Member
              name="سلطان حسن"
              incomp={false}
              color={this.state.successcolor}
              date="02/3/2018"
            />
            <Member
              name="راجحي حامدي"
              incomp={false}
              color={this.state.failuercolor}
              date="02/3/2018"
            />
          </Collapsible>
        </View>
      </View>
    );
  }
}
