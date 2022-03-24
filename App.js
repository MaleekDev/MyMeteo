import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
// Composant
import Home from './components/recherche';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.innerText}>Application météo 
      </Text>
      <StatusBar style="auto" />
      {/* <Home data={this.mesData}/>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    color: 'black',
  },

  tinyLogo: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },

});
