import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddSubCategory from './src/AddSubCategory';




export default function App() {
  return (
     <View style={styles.container}>
      <StatusBar style="auto" />
      <AddSubCategory/>  
      
     </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
