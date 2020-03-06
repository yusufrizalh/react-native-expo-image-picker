import * as React from 'react'; 
import { StyleSheet, View, Text, Image } from 'react-native'; 

export default class AssetExample extends React.Component {
    render() {
        return(
            <View>
                <Image style={styles.logo} 
                    source={require('../assets/expo-snack.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 128, height: 128
    }
})