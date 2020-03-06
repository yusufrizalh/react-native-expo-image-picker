import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack'; 
import { createDrawerNavigator } from 'react-navigation-drawer'; 

import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import AppImgPicker from './pages/App'; 

class NavDrawer extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return(
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}> 
                    <Image source={require('./assets/drawer.png')} 
                        style={{ width: 32, height: 32, marginLeft: 16 }} /> 
                </TouchableOpacity> 
            </View>
        );
    }
}

const Screen1_StackNavigator = createStackNavigator({
    Screen1: {
        screen: Screen1, 
        navigationOptions: ({ navigation }) => ({
            title: 'Menu Screen 1', 
            headerLeft: <NavDrawer navigationProps={navigation} />, 
            headerStyle: {
                backgroundColor: '#ff9800', 
            }, 
            headerTintColor: '#ffffff'
        }), 
    }, 
});

const Screen2_StackNavigator = createStackNavigator({
    Screen2: {
        screen: Screen2, 
        navigationOptions: ({ navigation }) => ({
            title: 'Menu Screen 2', 
            headerLeft: <NavDrawer navigationProps={navigation} />, 
            headerStyle: {
                backgroundColor: '#ff9800', 
            }, 
            headerTintColor: '#ffffff'
        }), 
    }, 
});

const Screen3_StackNavigator = createStackNavigator({
    Screen3: {
        screen: Screen3, 
        navigationOptions: ({ navigation }) => ({
            title: 'Menu Screen 3', 
            headerLeft: <NavDrawer navigationProps={navigation} />, 
            headerStyle: {
                backgroundColor: '#ff9800', 
            }, 
            headerTintColor: '#ffffff'
        }), 
    }, 
});

const AppImgPicker_StackNavigator = createStackNavigator({
    AppImgPicker: { 
        screen: AppImgPicker, 
        navigationOptions: ({ navigation }) => ({
            title: 'Image Picker', 
            headerLeft: <NavDrawer navigationProps={navigation} />, 
            headerStyle: {
                backgroundColor: '#ff9800', 
            }, 
            headerTintColor: '#ffffff'
        }), 
    }, 
});

const DrawerNavigation = createDrawerNavigator({
    AppImgPicker: { 
        screen: AppImgPicker_StackNavigator, 
        navigationOptions: {
            drawerLabel: 'Image Picker', 
        }, 
    }, 
    Screen1: { 
        screen: Screen1_StackNavigator, 
        navigationOptions: {
            drawerLabel: 'Menu Screen 1', 
        }, 
    }, 
    Screen2: { 
        screen: Screen2_StackNavigator, 
        navigationOptions: {
            drawerLabel: 'Menu Screen 2', 
        }, 
    }, 
    Screen3: {  
        screen: Screen3_StackNavigator, 
        navigationOptions: {
            drawerLabel: 'Menu Screen 3', 
        }, 
    }, 
});

export default createAppContainer(DrawerNavigation); 