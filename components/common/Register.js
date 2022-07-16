import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Button  from '@ant-design/react-native/lib/button';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
// import Cookies from 'js-cookie';

export default function Register(props) {
  const [username, setUserName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [showSubmitError, setShowSubmitError] = useState(false); 
  const [errorMsg, seterrorMsg] = useState(""); 

  return (
    <View style={styles.container}>
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <Image style={styles.img} source={require('../../assets/jblogo.jpg')} />
      <WhiteSpace />
      <WhiteSpace />
      <Text style={styles.header} className="header">Register</Text>
      <WhiteSpace />
      <WhiteSpace />
      <TextInput
        style={styles.input}
        onChange= {(e) => {setUserName(e.nativeEvent.text)}}
        value={username}
        placeholder="Username"
        keyboardType="default"
      />
         <TextInput
        style={styles.input}
        onChange= {(e) => {setUserName(e.nativeEvent.text)}}
        type='text'
        placeholder="Email"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChange= {(e) => {setPassword(e.nativeEvent.text)}}
        value={password}
        type="password"
        placeholder="Password"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChange= {(e) => {setPassword(e.nativeEvent.text)}}
        value={password}
        type="password"
        placeholder="Confirm Password"
        keyboardType="default"
      />
            <TextInput
        style={styles.input}
        onChange= {(e) => {setPassword(e.nativeEvent.text)}}
        value={password}
        type="text"
        placeholder="Social Provider"
        keyboardType="default"
      />
      <WhiteSpace />
      <WhiteSpace />

      <Button style={styles.button} onPress={() => {props.navigation.navigate('Login')}} type="primary">Submit</Button> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:60,

  },
  header : {
    fontSize:30 ,
    fontWeight:"bold",
    color:'#00292fe8'
  },
  input: {
    height: 40,
    borderRadius:40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderRadius:40,
    width:100,
    height:35
  },
  img: {
    width:90,
    height:100,
  }
});
  