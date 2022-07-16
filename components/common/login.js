import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Button  from '@ant-design/react-native/lib/button';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
// import Cookies from 'js-cookie';

export default function Login(props) {
  const [username, setUserName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [showSubmitError, setShowSubmitError] = useState(false); 
  const [errorMsg, seterrorMsg] = useState(""); 

  // const onSubmitSuccess = jwtToken => {
  //   Cookies.set('jwt_token', jwtToken, {
  //     expires: 30,
  //   })
  //   props.navigation.navigate('dashboard');
  // }

  // const onSubmitFailure = errorMsg => {
  //   setShowSubmitError(true);
  //   seterrorMsg(errorMsg);
  // }

  const submitForm = () => {
    if (username=='admin'){
      props.navigation.navigate('dashboard');
    }
    else if (username=='salesperson'){
      props.navigation.navigate('salesPersonDashboard');
    }
  //   const {username, password} = this.state
  //   const userDetails = {username, password}
  //   const url = 'https://apis.ccbp.in/login'
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(userDetails),
  //   }
  //   const response = await fetch(url, options)
  //   const data = await response.json()
  //   if (response.ok === true) {
  //     onSubmitSuccess(data.jwt_token)
  //   } else {
  //     onSubmitFailure(data.error_msg)
  //   }
  }

  return (
    <View style={styles.container}>
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <Image style={styles.img} source={require('../../assets/jblogo.jpg')} />
      <WhiteSpace />
      <WhiteSpace />
      <Text style={styles.header} className="header">Login</Text>
      <WhiteSpace />
      <WhiteSpace />
      <TextInput
        style={styles.input}
        onChange= {(e) => {setUserName(e.nativeEvent.text)}}
        value={username}
        placeholder="Username"
        keyboardType="default"
      />
      <WhiteSpace />
      <TextInput
        style={styles.input}
        onChange= {(e) => {setPassword(e.nativeEvent.text)}}
        value={password}
        type="password"
        placeholder="Password"
        keyboardType="default"
      />
      <WhiteSpace />
      <WhiteSpace />
      <Button style={styles.button} onPress={() => submitForm()} type="primary">Login</Button> 
      <WhiteSpace />
      <WhiteSpace />
      <Button style={styles.button}onPress={() => {props.navigation.navigate('register')}} type="primary">Register</Button> 

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
    width:150
  },
  img: {
    width:120,
    height:170,
  }
});
  