import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransaction from './Screens/BookTransaction';
import Search from './Screens/Search';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
  return (
    
      <AppStorage/>
  );
  }
}

const TabSwitcher = createBottomTabNavigator({
  Transaction:{screen:BookTransaction},
  Search:{screen:Search}

});

const AppStorage = createAppContainer(TabSwitcher);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
