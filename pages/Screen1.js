import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Screen1 extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.teks}>
                    Menu Screen 1 
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20, 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    teks: {
        fontSize: 24, 
        color: 'black', 
        fontWeight: 'bold', 
    }
});