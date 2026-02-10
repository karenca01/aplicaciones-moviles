import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react-native';
import { useState } from 'react';

const App = () => {

  const [numberLikes, setNumberLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [isSaved, setIsSaved] = useState(false);
  // const [isSaved, setIsSaved] = useState('gray');
  // const [numberSaves, setNumberSaves] = useState(0);

  // const handleLikesAndColor = () => {
  //   setNumberLikes(numberLikes + 1);
  //   setLikeColor('#e54848')
  // };

  const handleLikesAndColor = () => {
    if (isLiked) {
      setNumberLikes(numberLikes - 1);
    } else {
      setNumberLikes(numberLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  // const saveColor = () => {
  //   setSavesColor('#e9f26eff')
  // };

  const handleSaves = () => {
    setIsSaved(!isSaved);
  };

  return (
    <ScrollView style={styles.container}>
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

              {/* <TouchableOpacity onPress={handleLikesAndColor}>
                <Heart size={24} color={'black'} fill={likeColor} />
              </TouchableOpacity> */}

              <TouchableOpacity onPress={handleLikesAndColor}>
                <Heart
                  size={24}
                  color={'black'}
                  fill={isLiked ? '#cc0606ff' : 'gray'}
                />
              </TouchableOpacity>

              <Text style={styles.numberLikesC}>
                {numberLikes} likes
              </Text>

              <MessageCircle color="black" size={24} />
              <Send color="black" size={24} />
            </View>

            {/* <TouchableOpacity onPress={saveColor}>
              <Bookmark color="black" fill={savesColor} size={24} />
            </TouchableOpacity> */}

            <TouchableOpacity onPress={handleSaves}>
              <Bookmark
                color="black"
                fill={isSaved ? '#e9f26eff' : 'gray'}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.descriptionContainer}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>username </Text>
              Listen, listen!
            </Text>
          </View>

        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
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
  numberLikesC: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontWeight: 'bold',
  }
});
