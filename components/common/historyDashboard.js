import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Card from '@ant-design/react-native/lib/card';
import Button from '@ant-design/react-native/lib/button';
import { main_styles } from '../styles';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';

export default function HistoryDashboard(props) {

  return (
    <View style={styles.container}>
        <Text style={main_styles.header}>History</Text>
        <WhiteSpace />
        <WhiteSpace />     
        <WhiteSpace />

        <WhiteSpace />

        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('saleshistory')}} type="primary">Sales</Button>
        <WhiteSpace />
       
        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('expensehistory')}} type="primary">Expense</Button>
        <WhiteSpace />
       
        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('collectionHistory')}} type="primary">Collection</Button>
        <WhiteSpace />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:50,
  },

  font : {
    color: '#fff',
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'sans-serif',
  },
  header: {
    color:'#fff', fontWeight:'bold', fontSize:25, textAlign:'center'
  }

});
  