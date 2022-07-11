import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import Card from '@ant-design/react-native/lib/card';
import { main_styles } from '../styles';
// import EditOutlined from '@ant-design/icons/EditOutlined';

export default function SalesPersons(props) {

  return (
<ScrollView style={styles.cont}> 

    <View style={styles.container}>
        <Text style={main_styles.header}>Sales Persons</Text>
        <WhiteSpace />
        <Card style={styles.cust_cont}>
            <Text>Sales Person 1</Text>
        </Card>
        <Card style={styles.cust_cont}>
            <Text>Sales Person 2</Text>
        </Card>
        <Card style={styles.cust_cont}>
            <Text>Sales Person 3</Text>
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
    padding:10,
    paddingBottom:13,
    borderColor:'#00292fe8',
    width:'92.5%',
    marginTop:15
  },
});
  