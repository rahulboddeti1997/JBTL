import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import Card from '@ant-design/react-native/lib/card';
import { main_styles } from '../styles';
import Button from '@ant-design/react-native/lib/button';

// import EditOutlined from '@ant-design/icons/EditOutlined';

export default function SalesPersons(props) {

  return (
<ScrollView style={styles.cont}> 

    <View style={styles.container}>
        <Text style={main_styles.header}>Sales Persons</Text>
        <WhiteSpace />
        <Card style={styles.cust_cont}>
            <Text style={styles.text}>Sales Person 1</Text>
            <View style={styles.card_button}><Button style={[main_styles.button,styles.button]} size="small" type="primary" onPress={() => props.navigation.navigate('editsales')}>Edit</Button><Button style={[main_styles.button,styles.button]} size="small" type="primary">Disable</Button></View>
        </Card>
        <Card style={styles.cust_cont}>
            <Text style={styles.text}>Sales Person 2</Text>
            <View style={styles.card_button}><Button style={[main_styles.button,styles.button]} size="small" type="primary" onPress={() => props.navigation.navigate('editsales')}>Edit</Button><Button style={[main_styles.button,styles.button]} size="small" type="primary">Disable</Button></View>
        </Card>
        <Card style={styles.cust_cont}>
            <Text style={styles.text}>Sales Person 3</Text>
            <View style={styles.card_button}><Button style={[main_styles.button,styles.button]} size="small" type="primary" onPress={() => props.navigation.navigate('editsales')}>Edit</Button><Button style={[main_styles.button,styles.button]} size="small" type="primary">Disable</Button></View>
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
  cont: {
    backgroundColor: '#fff',
  },
  header: {
     fontWeight:'bold', fontSize:25, textAlign:'center', position:'relative'
  },
  dashboard: {
      height:40,
      width:'80%',
      borderWidth:0,
  },
  body: {
      borderTopWidth:0,
      display:'flex',
      flexDirection:'row',
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
  card_button:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',    

  },
  text:{
    alignSelf: 'flex-end'
  }
});
  