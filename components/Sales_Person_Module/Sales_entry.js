import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import  Button  from '@ant-design/react-native/lib/button';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import InputItem from '@ant-design/react-native/lib/input-item';
import { main_styles } from '../styles';
import { Alert, Modal, Pressable } from "react-native";

// import { ExclamationCircleFill } from 'antd-mobile-icons';

export default function SalesEntry() {
  const [modalVisible, setModalVisible] = useState(false);
 
  return (
    <View style={styles.container}>
        <Text style={main_styles.header}>Sales Entry</Text>
        <View style={main_styles.dropdown}>
          <Picker>
              <Picker.Item label='Customer1'></Picker.Item>
              <Picker.Item label='Customer2'></Picker.Item>
            </Picker>
        </View>
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Previous Balance"
            style={main_styles.input}
           >
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <View style={main_styles.dropdown}>
          <Picker>
              <Picker.Item label='Cash'></Picker.Item>
              <Picker.Item label='Mobile Wallet'></Picker.Item>
            </Picker>
        </View>
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Receipt Url"
            style={main_styles.input}
           >
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add Product</Text>
      </Pressable>
      
        
        <WhiteSpace />
        <WhiteSpace />
        <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible()}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
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
            <Text style={styles.modalText}>Add Product</Text>
            <View style={main_styles.modaldropdown}>
          <Picker>
              <Picker.Item label='Product1'></Picker.Item>
              <Picker.Item label='Product2'></Picker.Item>
            </Picker>
            <Picker>
              <Picker.Item label='1'></Picker.Item>
              <Picker.Item label='2'></Picker.Item>
              <Picker.Item label='3'></Picker.Item>
            </Picker>
            <InputItem
            clear
            placeholder="Actual Price"
            style={main_styles.modalinput}
           >
        </InputItem>
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Tax Price"
            style={main_styles.modalinput}
           >
        </InputItem>
          </View>
        <WhiteSpace />
        <WhiteSpace />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible()}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
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
    alignItems: 'center',
    paddingTop:50,
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
