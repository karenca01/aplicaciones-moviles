import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  //state to know which section is selected
  const [section, setSection] = useState('descripcion');

  //returns text of the selected section
  const getText = () => {
    switch (section) {
      case 'capitulos':
        return (
          'Temporada 2 - “The Dundies”\n' +
          'Temporada 3 - “The Job”\n' +
          'Temporada 4 - “Gay Witch Hunt”\n' +
          'Temporada 5 - “Stress Relief”\n' +
          'Temporada 6 - “Niagara: Part 1 & 2”\n' +
          'Temporada 7 - “Goodbye Michael”\n' +
          'Temporada 9 - El final de la serie'
        );

      case 'frases':
        return (
          '“That’s what she said” — Michael Scott\n\n' +
          '"Uh...nope. Nope. This isn\'t the surprise. It\'s surprising because you didn\'t expect it, but you will... you\'ll know it when you see it." — Michael Scott\n\n' +
          '"Dwight, you ignorant slut!" — Michael Scott'
        );

      default:
        return (
          'La adaptación de Estados Unidos, localizada en Scranton, Pensilvania, ' +
          'es la de una compañía papelera de alguna forma un poco más dinámica ' +
          'que la versión original británica, aunque los personajes son esencialmente los mismos.'
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleOne}>The</Text>
        <Text style={styles.titleTwo}>Office</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/images/michaelScott.jpg')}
          style={styles.image}
        />
      </View>

      {/*buttons to switch sections */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => setSection('descripcion')}>
          <Text style={styles.buttonText}>Descripción</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSection('capitulos')}>
          <Text style={styles.buttonText}>Capítulos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSection('frases')}>
          <Text style={styles.buttonText}>Frases</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        {/*text now comes from getText*/}
        <Text style={styles.bodyText}>
          {getText()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: '#000000',
    alignItems: 'center',
    padding: 30
  },
  titleContainer: {
    height: "20%",
    width: "100%",
    marginTop: 50,
  },
  titleOne: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  titleTwo: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  imageContainer: {
    height: "40%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 15,
    paddingTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontStyle: 'italic',
    textAlign: 'center',
  }
});
