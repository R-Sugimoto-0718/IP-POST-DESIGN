import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')
export default function DejimonApp() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
      }}>
      <View style={{...StyleSheet.absoluteFill}}>
        <Image
          source={require('../assets/dejimon1.jpg')}
          style={{flex: 1, width: null, height: null,}}
        />
      </View>
      <View style={{ height: height / 3, justifyContent: 'center' }}>
        <View style={styles.button}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
        </View>
        <View style={{...styles.button, backgroundColor: '#3DC0B1'}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>SIGN IN</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  }
});
