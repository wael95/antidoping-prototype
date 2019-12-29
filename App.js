import * as React from 'react';
import {
  View,
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  Image,
  I18nManager,
} from 'react-native';
import { Container, Left, Right, Text, Thumbnail } from 'native-base';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';

import Home from './Pages/Home';
import Annaouncement from './Pages/Announcements';
import AboutUs from './Pages/About';
import ContactUs from './Pages/ContactUs';
export default class App extends React.Component {
  constructor() {
    super();
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);
    console.log(I18nManager.isRTL);
  }
  render() {
    return <Drawer />;
  }
}
//  fontFamily: 'Farah',
//  fontSize: 30,

const DrawerThings = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View>
      <Image
        source={require('./Photos/log.png')}
        style={{ height: 120, width: '100%' }}
      />
    </View>
    <View
      style={{
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //height: 80
      }}>
      <Thumbnail
        style={{ margin: 10 }}
        source={require('./Photos/Unknown.jpg')}
      />
      <Text>وائل العلي</Text>
    </View>

    <ScrollView style={{ alignItems: 'flex-end' }}>
      <DrawerItems
        labelStyle={{
          fontSize: 20,
        }}
        {...props}
      />
    </ScrollView>
  </SafeAreaView>
);
const Drawer = createDrawerNavigator(
  {
    Home: Home,
    Annaouncement: Annaouncement,
    AboutUs: AboutUs,
    ContactUs: ContactUs,
  },
  {
    contentComponent: DrawerThings,
    drawerPosition: 'right',
  }
);
