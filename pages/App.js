import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

import AssetExample from '../components/AssetExample'; 

export default function App() {

let [selectedImage, setSelectedImage] = React.useState(null);
let openImagePickerAsync = async () => {
  let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

let pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled === true) {
    return;
  }
  setSelectedImage({ localUri: pickerResult.uri });
};

let openShareDialogAsync = async () => {
  if (!(await Sharing.isAvailableAsync())) {
    alert(`Uh oh, sharing isn't available on your platform`);
    return;
  }
  Sharing.shareAsync(selectedImage.localUri);
};

if (selectedImage !== null) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />

      <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
        <Text style={styles.buttonText}>Share this photo</Text>
      </TouchableOpacity>
    </View>
  );
}

  return (
    <View style={styles.container}>
      <Text>Welcome to Expo Inixindo Surabaya!</Text>
      <View><Text>{'\n'}</Text></View>
      <AssetExample /> 
      <View><Text>{'\n'}</Text></View>

      <TouchableOpacity
        onPress={openImagePickerAsync} 
        style={{ backgroundColor: 'transparent' }}>
        <Text style={{ fontSize: 20, color: '#000' }}>Click Me!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});