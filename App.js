import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 35}}>  Empadinhas da Mira </Text>

      <Image source={require("./assets/empada.png")} />
        <Text style={{fontSize: 20}} >@Samira__ac</Text>
        <Text>-</Text>
        <Text>-</Text>
         <Button  value="Exibir Alert" style={styles.container} 
              title= "Veja Mais " />

 
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
