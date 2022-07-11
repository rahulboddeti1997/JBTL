import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Card from '@ant-design/react-native/lib/card';
import Button from '@ant-design/react-native/lib/button';
import { main_styles } from '../styles';



export default function SalesPersonDashboard(props) {

  return (
    <View style={styles.container}>
        <Text style={main_styles.header}>Dashboard</Text>

        <Card style={main_styles.dashboard}>
            <Card.Header title={<Text style={styles.header}>Total Outstanding</Text>} />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={styles.font }>Cash  </Text>
                <Text style={styles.font}>Credit  </Text>
              </View>
            </Card.Body>
        </Card>
        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('saleshistory')}} type="primary">History</Button>
        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('customer')}} type="primary">Customers</Button>
        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('salesentry')}} type="primary">Sales Entry</Button>
        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('expenseEntry')}} type="primary">Expense Entry</Button>
        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('collectionEntry')}} type="primary">Collection Entry</Button>

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
  