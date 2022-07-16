import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import Card from '@ant-design/react-native/lib/card';
import { main_styles } from '../styles';
import { Pressable } from "react-native";
import Button from '@ant-design/react-native/lib/button';


export default function Customer(props) {

  return (
<ScrollView style={styles.cont}> 

    <View style={styles.container}>
        <Text style={main_styles.header}>Customers</Text>

            <Pressable
              style={[main_styles.button,styles.button]}
              onPress={() => {props.navigation.navigate('addcustomer')}}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
        <WhiteSpace />

        <Card style={styles.cust_cont}>
          <View>
            <Text>Customer 1</Text>
            <Text style={styles.outstand_amt}>Outstanding : $2,243</Text>
          </View>
            <View style={styles.card_button}><Button style={[main_styles.button,styles.button]} size="small" type="primary" onPress={() => props.navigation.navigate('addcustomer')}>Edit</Button></View>
        </Card>
        <Card style={styles.cust_cont}>
          <View>
            <Text>Customer 2</Text>
            <Text style={styles.outstand_amt}>Outstanding : $4,743</Text>
          </View>
            <View style={styles.card_button}><Button style={[main_styles.button,styles.button]} size="small" type="primary" onPress={() => props.navigation.navigate('addcustomer')}>Edit</Button></View>
        </Card>
        <Card style={styles.cust_cont}>
          <View>
            <Text>Customer 3</Text>
            <Text style={styles.outstand_amt}>Outstanding : $9,000</Text>
          </View>
            <View style={styles.card_button}><Button style={[main_styles.button,styles.button]} size="small" type="primary" onPress={() => props.navigation.navigate('addcustomer')}>Edit</Button></View>
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
    padding:15,
    paddingBottom:17,
    borderColor:'#00292fe8',
    width:'92.5%',
    marginTop:15,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  button:{
    width:60,
    marginRight:6,
    marginTop:0
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  card_button:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between', 
    alignSelf:'center'   

  },
  text:{
    alignSelf: 'flex-end'
  },
  outstand_amt: {
    fontWeight:'bold'
  }
  
});
  