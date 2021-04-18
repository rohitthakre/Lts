
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/HomeScreen';




export default function App() {
  return (
     <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeScreen/>  
      
     </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
