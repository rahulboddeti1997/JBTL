import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import Card from '@ant-design/react-native/lib/card';
import InputItem from '@ant-design/react-native/lib/input-item';
import { main_styles } from '../styles';
import { Alert, Modal, Pressable } from "react-native";

export default function AddCustomer() {

  return (
<ScrollView style={styles.cont}> 

    <View style={styles.container}>
        <Text style={main_styles.header}>Add Customer</Text>
        <WhiteSpace />
        <WhiteSpace />     
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Customer Name"
            style={main_styles.input}
           >
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Email"
            style={main_styles.input}
           >
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Mobile Number"
            style={main_styles.input}
           >
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Village Address"
            style={main_styles.input}
           >
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            clear
            placeholder="Region"
            style={main_styles.input}
           >
        </InputItem>
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
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:50,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#083d6fde",
    width:120
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});
  