import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import  WhiteSpace  from '@ant-design/react-native/lib/white-space';
import Card from '@ant-design/react-native/lib/card';
import { main_styles } from '../styles';



export default function SalesHistory() {

  return (
<ScrollView style={styles.cont}> 

    <View style={styles.container}>
        <Text style={main_styles.header}>History</Text>
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
  