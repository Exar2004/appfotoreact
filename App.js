import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, image, Button } from 'react-native';
import { usastate } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const {image, setimage} = usastate(null);

  const carregarFotos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled){
      setimage(result.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <Button title='select foto' onPress={()=>{carregarFotos}}>Selecione uma foto</Button>
      {image && <Image source={{ uri: image }} style={styles.image} />}
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
  image: {
    width: 200,
    height: 200,
  },

});
