import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon, ListItem } from 'native-base';
import Collapsible from 'react-native-collapsible';

import Club from './children/collapsedclub';
export default class Collapseibl extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      iscollapsed: true,
    };
  }

  render() {
    return (
      <View style={{ backgroundColor:this.props.color }}>
        <ListItem
          style={{ flex: 1, flexDirection: 'colomn' }}
          onPress={() =>
            this.setState({ iscollapsed: !this.state.iscollapsed })
          }>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              
            }}>
            بيان الكشف عن المنشطات لرياضة المصارعة
          </Text>
          <Text note>2017/2018</Text>
          <Icon name="arrow-down" />
        </ListItem>

        <Collapsible collapsed={this.state.iscollapsed}>
          <Club name='نادي الرياض' color='#E7FBFF' uri={require('../Photos/riyadh.jpg')} />
          <Club name='نادي النجمة' color='#B6F2FF' uri={require('../Photos/Najmahclub.png')} />
          <Club name='نادي الوحدة' color='#B9C9CC' uri={require('../Photos/wahda.jpg')} />
          <Club name='نادي الرياض' color='#E7FBFF' uri={require('../Photos/riyadh.jpg')} />
          <Club name='نادي النجمة' color='#B6F2FF' uri={require('../Photos/Najmahclub.png')} />
          <Club name='نادي الوحدة' color='#B9C9CC' uri={require('../Photos/wahda.jpg')} />
        </Collapsible>
      </View>
    );
  }
}
