import { StyleSheet, Text, View, Image, ImageBackground, Pressable, Linking } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/images/background.jpg')}
      style={styles.container}
      resizeMode="cover" //the image covers the whole screen
    >
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/images/theArtOfLoving.jpg')}
          style={styles.image}
          resizeMode="contain" //the image keeps proportions
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          The Art Of Loving
        </Text>
        <Text style={styles.text}>
          Me parece un álbum increíble ya que lo puedes escuchar de fondo y las melodías te relajan, así como contiene canciones para cualquier tipo de momento (feliz o no tan lindo).
        </Text>
        <Pressable
          style={styles.button}
          onPress={() =>
            Linking.openURL('https://open.spotify.com/intl-es/album/0l8zYqoUeBYg47Gmevq9HZ?si=rP4Hg4EnQqeApmkDaW_Z9w')
          }
        >
          <Text style={styles.buttonText}>Open on Spotify</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    marginTop: "20%",
    height: "40%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
  },
  textContainer: {
    height: "40%",
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'lighter',
    lineHeight: 22, //space between lines
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1DB954',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});