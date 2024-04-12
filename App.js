import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { usastate } from 'react';
import * ImgePicker from 'expo-image-picker';

export default function App() {
  const {image, setimage} = usastate(null);

  const carregarFotos = async () => {
    let resulet = await ImgePicker.lauchImageLibraryAsync({})
  }

  return (
    <View style={styles.container}>
      <Button title='select foto' onPress={()=>{carregarFotos}}>Selecione uma foto</Button>
      {image && <image }

      <StatusBar style="auto" />
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

});
