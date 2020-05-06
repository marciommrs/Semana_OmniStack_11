import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Omnistack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Ocupar o tamanho todo da tela
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
