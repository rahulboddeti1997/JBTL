import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Card from '@ant-design/react-native/lib/card';
import Button from '@ant-design/react-native/lib/button';
import { main_styles } from '../styles';
import { Alert, Modal, Pressable } from "react-native";
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import DatePicker from 'react-native-date-picker';

export default function Dashboard(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date())

  return (
    <View style={styles.container}>
        <Text style={main_styles.header}>Dashboard</Text>
        <WhiteSpace />
        <WhiteSpace />     
        <WhiteSpace />
        <Card style={main_styles.dashboard}>
            <Card.Header title={<Text style={styles.header}>Total Outstanding</Text>} />
            <Card.Body>
              <View style={{ height: 50, padding:5 }}>
                <View style={styles.dash}>
                <Text style={styles.font }>Cash </Text>
                <Text style={styles.font }>$ 2,23,432 </Text>
                </View>
                <WhiteSpace />
                <View style={styles.dash}>
                <Text style={styles.font}>Credit </Text>
                <Text style={styles.font }>$ 3,65,323 </Text>
                </View>
              </View>
            </Card.Body>
        </Card>
        <WhiteSpace />

        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('salespersons')}} type="primary">Sales Person</Button>
        <WhiteSpace />

        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('historydashboard')}} type="primary">History</Button>
        <WhiteSpace />
        
        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('customer')}} type="primary">Customers</Button>
        <WhiteSpace />
       
        <Button style={main_styles.button} onPress={() => setModalVisible(true)} type="primary">Download Report</Button>
        <WhiteSpace />
        
        <Button style={main_styles.button} onPress={() => {props.navigation.navigate('products')}} type="primary">Products</Button>
        <View style={styles.centeredView}>
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
            <Text style={styles.modalText}>Report</Text>
            <View style={main_styles.modaldropdown}>
            {/* <DatePicker date={date} onDateChange={setDate} /> */}
          </View>
        <WhiteSpace />
        <WhiteSpace />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Download</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>
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
    fontSize:18,
    fontWeight:'bold'
  },
  header: {
    color:'#fff', fontWeight:'bold', fontSize:25, textAlign:'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  dash: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between', 
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
  