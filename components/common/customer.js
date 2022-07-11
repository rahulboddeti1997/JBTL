import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import Card from '@ant-design/react-native/lib/card';
import { main_styles } from '../styles';
import { Pressable } from "react-native";


export default function Customer(props) {

  return (
<ScrollView style={styles.cont}> 

    <View style={styles.container}>
        <Text style={main_styles.header}>Customers</Text>

            <Pressable
              style={[styles.button]}
              onPress={() => {props.navigation.navigate('addcustomer')}}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
        <WhiteSpace />

        <Card style={styles.cust_cont}>
            <Text>Customer 1</Text>
        </Card>
        <Card style={styles.cust_cont}>
            <Text>Customer 2</Text>
        </Card>
        <Card style={styles.cust_cont}>
            <Text>Customer 3</Text>
        </Card>
    </View>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:50,
  },
  cust_cont: {
    borderWidth:2,
    border:'solid',
    padding:10,
    paddingBottom:13,
    borderColor:'#00292fe8',
    width:'92.5%',
    marginTop:15
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor:'#083d6fde',
    width:75,
    marginLeft:'73%'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  
});
  