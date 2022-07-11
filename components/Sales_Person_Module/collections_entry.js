import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import Card from '@ant-design/react-native/lib/card';
import InputItem from '@ant-design/react-native/lib/input-item';
import { main_styles } from '../styles';
import {Picker} from "@react-native-picker/picker";
import { Alert, Modal, Pressable } from "react-native";



export default function CollectionEntry() {

  return (
<ScrollView style={styles.cont}> 

    <View style={styles.container}>
        <Text style={main_styles.header}>Collections Entry</Text>
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
            placeholder="Enter Amount Collected"
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
        <Pressable
            style={[styles.button, styles.buttonClose]}
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
  
});
  