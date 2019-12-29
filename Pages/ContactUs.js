import * as React from 'react';
import { View, StyleSheet, Dimensions, Linking } from 'react-native';
import { Text, Fab, Icon, Button, Container, Content } from 'native-base';
import { MapView, Location } from 'expo';
import Header from './Header';
import HDR from './Header111';
var width = Dimensions.get('window').width;
export default class Announcements extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }
  static navigationOptions = {
    drawerLabel: 'تواصل معنا',
  };
  render() {
    return (
      <Container>
        <HDR body="تواصل معنا" nav={this.props.navigation} />
        <Content>
          <View style={styles.card}>
            <Icon
              name="home"
              active
              style={{ fontWeight: 'bold', fontSize: 40 }}
            />
            <Text style={styles.Text}>المملكة العربية السعودية -الرياض</Text>
            <Text style={styles.Text}>
              مجمع الأمير فيصل بن فهد الأولمبي-الدور الثالث
            </Text>
            <Text style={styles.Text}>
              اللجنة السعودية للمراقبة على المنشطات
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#efffff',
              marginHorizontal: 10,
              marginTop: 10,
              borderWidth: 2,
              borderColor: '#e6e6e6',
              borderRadius: 9,
              padding: 10,
            }}>
            <View style={{ alignItems: 'center', marginBottom: 7 }}>
              <Icon
                name="mail"
                active
                style={{ fontWeight: 'bold', fontSize: 40 }}
              />
              <Text style={styles.Text}>صندوق بريد اللجنة</Text>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                flex: 1,
                justifyContent: 'flex-end',
                marginVertical: 7,
                marginHorizontal: 5,
              }}>
              <Text style={styles.Text}>
                اللجنة السعودية للرقابة على المنشطات{' '}
              </Text>
              <Text style={styles.Text}>8321 الوادي - الرفيعة </Text>
              <Text style={styles.Text}>وحدة رقم 3 </Text>
              <Text style={styles.Text}>الرياض 12752-2479 </Text>
              <Text style={styles.Text}>المملكة العربية السعودية </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.Text}>هاتف: 00966118800030</Text>
              <Icon name="call" style={{ fontSize: 35, marginHorizontal: 5 }} />
            </View>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.Text}>فاكس: 009661148831279</Text>
              <Icon name="send" style={{ fontSize: 35, marginHorizontal: 5 }} />
            </View>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.Text}>البريد الاكتروني: info@saadc.org</Text>
              <Icon name="mail" style={{ fontSize: 35, marginHorizontal: 5 }} />
            </View>
          </View>

          <View style={[styles.card, { marginBottom: 10 }]}>
            <View style={{ alignItems: 'center', marginBottom: 7 }}>
              <Icon
                name="map"
                active
                style={{ fontWeight: 'bold', fontSize: 40 }}
              />
              <Text style={styles.Text}>مقر اللجنة</Text>
            </View>
            <View>
              <MapView
                style={{ width: width - 35, height: 300 }}
                initialRegion={{
                  latitude: 24.647719,
                  longitude: 46.649237,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <MapView.Marker
                  coordinate={{ latitude: 24.647719, longitude: 46.649237 }}
                  title="مقر اللجنة"
                  description="اللجنة السعودية للرقابة على المنشطات"
                />
              </MapView>
            </View>
            <View style={{ marginBottom: 7 }}>
              <Button
                onPress={() => Linking.openURL('comgooglemaps://?q=24.647719,46.649237')}
                rounded>
                <Icon name="share" />
              </Button>
            </View>
          </View>
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
    backgroundColor: '#efffff',
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#e6e6e6',
    borderRadius: 9,
    alignItems: 'center',
    padding: 10,
  },
  Text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
