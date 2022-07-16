import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import InputItem from '@ant-design/react-native/lib/input-item';
import { main_styles } from '../styles';
import { Alert, Modal, Pressable } from "react-native";
import Card from '@ant-design/react-native/lib/card';

export default function EditSalesPerson() {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
 
  return (
    <View style={styles.container}>
        <Text style={main_styles.header}>Edit Sales Person</Text>
       
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Username"
            style={main_styles.input}
           >
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Password"
            style={main_styles.input}
           >
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Social Provider"
            style={main_styles.input}
           >
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <View style={styles.card_button}>
        <Pressable
            style={[styles.button,styles.deleteButton]}
            onPress={() => setModalVisible()}
            >
              <Text style={styles.textStyle}>Delete Account</Text>
            </Pressable>
            <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible()}
            >
              <Text style={styles.textStyle}>Disable Account</Text>
            </Pressable>
            </View>
            <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible()}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
  card_button:{
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
    width:140,
    backgroundColor: "#083d6fde",

  },
  buttonOpen: {
    backgroundColor: "#083d6fde",
  },
  buttonClose: {
    marginRight: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonwrap: {
    display: "flex",
    flexDirection: "row"
  },
  deleteButton:{
    marginRight:10,
  }
});
