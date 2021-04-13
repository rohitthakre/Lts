
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './src/Registration';




export default function App() {
  return (
     <View style={styles.container}>
      <StatusBar style="auto" />
      <Registration/>  
      
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
