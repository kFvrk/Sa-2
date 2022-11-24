import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/authContext'
import CustomButton from '../components/CustomButton';

const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"...Bem vindo a StyleModel..."}</Text>
      <Text style={styles.textMiddle}>{ "Somos uma empresa que gerencia e facilita o contato entre você e empresas qualificadas para que seja mais fácil o seu objetivo e ir até em busca do seus sonhos!"}</Text>
      <Text style={styles.textCopy}>{"StyleModel © 2022"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'space-around',
    
  },
  text: {
    fontSize: 30,
    margin: 40,
    textAlign: 'center'
  },
  textMiddle: {
    fontSize: 25,
    margin: 50,
    textAlign: 'center'
  },
  textCopy: {
    fontSize: 13,
    margin: 10,
    textAlign: 'center'
  }
})

export default Home;