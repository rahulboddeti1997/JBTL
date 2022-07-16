import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { main_styles } from '../styles';
import { DataTable } from 'react-native-paper';
import Button from '@ant-design/react-native/lib/button';
import { Alert, Modal, Pressable } from "react-native";
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';


export default function SalesHistory(props) {
  const [modalVisible, setModalVisible] = useState(false);

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
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary"  onPress={() => setModalVisible(true)}>Details..</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">View</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary" onPress={() => props.navigation.navigate('salesentry')}>Edit</Button></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{paddingRight: 10}}>12/06/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>Customer 2</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>$ 250</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary"  onPress={() => setModalVisible(true)}>Details..</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">View</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary" onPress={() => props.navigation.navigate('salesentry')}>Edit</Button></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{paddingRight: 10}}>12/07/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>Customer 1</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>$ 220</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary" onPress={() => setModalVisible(true)} >Details..</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">View</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary" onPress={() => props.navigation.navigate('salesentry')}>Edit</Button></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
      <DataTable.Cell style={{paddingRight: 10}}>12/06/2022</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>Customer 2</DataTable.Cell>
        <DataTable.Cell style={{paddingRight: 10}}>$ 250</DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary" onPress={() => setModalVisible(true)}>Details..</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">View</Button></DataTable.Cell>
        <DataTable.Cell style={{paddingRight:10}}><Button style={main_styles.button} size="small" type="primary">Edit</Button></DataTable.Cell>
      </DataTable.Row>
    </DataTable>
    </ScrollView> 
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>More Details</Text>
            <View style={main_styles.modaldropdown}>
            {/* <DatePicker date={date} onDateChange={setDate} /> */}
          </View>
        <WhiteSpace />
        <WhiteSpace />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:120
  },
  buttonOpen: {
    backgroundColor: "#083d6fde",
  },
  buttonClose: {
    backgroundColor: "#083d6fde",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
  