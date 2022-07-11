import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Login from './components/login.js';
import Dashboard from './components/Admin_Module/dashboard.js';
import SalesPersonDashboard from './components/Sales_Person_Module/s_dashboard.js';
import SalesPersons from './components/Admin_Module/salesPersons.js';
import SalesEntry from './components/Sales_Person_Module/Sales_entry.js';
import ExpenseEntry from './components/Sales_Person_Module/Expense_entry.js';
import CollectionEntry from './components/Sales_Person_Module/collections_entry.js';
import SalesHistory from './components/common/salesHistory.js';
import Products from './components/Admin_Module/products.js';
import Customer from './components/common/customer.js';
import AddCustomer from './components/common/add_customer.js';
import AddProduct from './components/Admin_Module/add_product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="dashboard" component={Dashboard}  />
      <Stack.Screen name="salesPersonDashboard" component={SalesPersonDashboard}  />
      <Stack.Screen name="salespersons" component={SalesPersons}  />
      <Stack.Screen name="salesentry" component={SalesEntry}  />
      <Stack.Screen name="expenseEntry" component={ExpenseEntry}  />
      <Stack.Screen name="collectionEntry" component={CollectionEntry}  />
      <Stack.Screen name="saleshistory" component={SalesHistory}  />
      <Stack.Screen name="products" component={Products}  />
      <Stack.Screen name="customer" component={Customer}  />
      <Stack.Screen name="addcustomer" component={AddCustomer}  />
      <Stack.Screen name="addproduct" component={AddProduct}  />

    </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  