import { StyleSheet, Text, View, Image } from 'react-native';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/images/instagram-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.postContainer}>
          <View style={styles.userContainer}>
            <View style={styles.avatar} />
            <Text style={styles.usernameText}>username</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/images/post1.jpg')}
              style={styles.postImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.interactionsContainer}>
            <View style={styles.iconsLeft}>
              <Heart color="black" size={24} />
              <MessageCircle color="black" size={24} />
              <Send color="black" size={24} />
            </View>

            <Bookmark color="black" size={24} />
          </View>

          <View style={styles.descriptionContainer}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>username </Text>
              Listen, listen!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '10%',
    // backgroundColor: 'red',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 100,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
  },
  postContainer: {
    width: '100%',
    height: 'auto',
    padding: 15,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  usernameText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    width: '100%',
    height: 'auto',
    // backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10
  },
  interactionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  iconsLeft: {
    flexDirection: 'row',
    gap: 15,
  },
});
