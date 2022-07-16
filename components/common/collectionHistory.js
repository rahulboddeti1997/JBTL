import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { main_styles } from '../styles';
import { DataTable } from 'react-native-paper';
import Button from '@ant-design/react-native/lib/button';

export default function CollectionHistory(props) {

  return (
    <View style={styles.container}>
        <Text style={main_styles.header}>Collection History</Text>
<ScrollView horizontal> 
        <DataTable style={styles.cont}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={{paddingRight:70}}>Date</DataTable.Title>
        <DataTable.Title style={{paddingRight:25}}>Customer</DataTable.Title>
        <DataTable.Title style={{paddingRight:20}}>Amount</DataTable.Title>
        <DataTable.Title style={{paddingRight:10}}>Action</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row >
        <DataTable.Cell style={{paddingRight:10}}>12/07/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}>Customer 1</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:20}}>$ 220</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary" onPress={() => props.navigation.navigate('collectionEntry')}>Edit</Button></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{paddingRight: 10}}>12/06/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>Customer 2</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 20}}>$ 250</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary" onPress={() => props.navigation.navigate('collectionEntry')}>Edit</Button></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{paddingRight: 10}}>12/07/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>Customer 1</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 20}}>$ 250</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary" onPress={() => props.navigation.navigate('collectionEntry')}>Edit</Button></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
      <DataTable.Cell style={{paddingRight: 10}}>12/06/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>Customer 2</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 20}}>$ 250</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary" onPress={() => props.navigation.navigate('collectionEntry')}>Edit</Button></DataTable.Cell>
      </DataTable.Row>
    </DataTable>
    </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:50,
  },
  cont: {
    paddingTop: 15,
    fontSize:2
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },

});
  