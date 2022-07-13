import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { main_styles } from '../styles';
import { DataTable } from 'react-native-paper';
import Button from '@ant-design/react-native/lib/button';


export default function SalesHistory() {

  return (


    <View style={styles.container}>
        <Text style={main_styles.header}>Sales History</Text>
        <ScrollView horizontal> 
        <DataTable style={styles.cont} pagination>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={{paddingRight:10}}>Date</DataTable.Title>
        <DataTable.Title style={{paddingRight:10}}>Customer</DataTable.Title>
        <DataTable.Title style={{paddingRight:10}}>Amount</DataTable.Title>
        <DataTable.Title style={{paddingRight:10}}>Details</DataTable.Title>
        <DataTable.Title style={{paddingRight:10}}>Receipt</DataTable.Title>
        <DataTable.Title style={{paddingRight:10}}>Action</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row >
        <DataTable.Cell style={{paddingRight:10}}>12/07/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}>Customer 1</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}>$ 220</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">Details..</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">View</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">Edit</Button></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{paddingRight: 10}}>12/06/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>Customer 2</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>$ 250</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">Details..</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">View</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">Edit</Button></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{paddingRight: 10}}>12/07/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>Customer 1</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>$ 220</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">Details..</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">View</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">Edit</Button></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
      <DataTable.Cell style={{paddingRight: 10}}>12/06/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>Customer 2</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>$ 250</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">Details..</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">View</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">Edit</Button></DataTable.Cell>
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
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  
});
  