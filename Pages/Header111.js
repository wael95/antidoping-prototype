import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import { Text, Header, Left, Right, Body, Icon } from 'native-base';
export default class HDR extends React.Component {
  render() {
    return (
      <Header
        transparent
        style={{
          paddingTop: 10,
          marginTop: 30,
          paddingBottom: 30,
          justifyItems: 'center',
          backgroundColor: '#fff',
          shadowColor: '#fff',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 23,
            // marginHorizontal: 30,
            color: '#595959',
          }}>
          {this.props.body ? this.props.body : ''}
        </Text>

        <Right>
          <TouchableHighlight
            onPress={() => this.props.nav.openDrawer()}
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.1)',
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: 100,
              marginHorizontal: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
            }}>
            <Icon
              style={{
                fontWeight: 'bold',
                color: '#737373',
                fontSize: 30,
              }}
              name="menu"
            />
          </TouchableHighlight>
        </Right>
      </Header>
    );
  }
}
