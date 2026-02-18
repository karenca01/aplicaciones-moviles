import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


const App = () => {
  const [followers, setFollowers] = useState(41);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    // f para usar el ultimo valor
    if (isFollowing) {
      setFollowers(f => f - 1);
    } else {
      setFollowers(f => f + 1);
    }
    setIsFollowing(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Username */}
      <Text style={styles.username}>karenki__</Text>

      {/* Parte superior */}
      <View style={styles.topSection}>
        <Image
          source={require('./assets/images/porfilePicture.jpg')}
          style={styles.profilePic}
        />

        <View style={styles.rightSection}>
          <Text style={styles.name}>Karen Cervantes</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>35</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bio */}
      <Text style={styles.bio}>karen's memories</Text>

      {/* Botones */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.followButton,
            { backgroundColor: isFollowing ? '#eee' : '#0095f6' }
          ]}
          onPress={handleFollow}
        >
          <Text
            style={[
              styles.followText,
              { color: isFollowing ? 'black' : 'white' }
            ]}
          >
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageText}>Message</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.postsContainer}>
          <Image source={require('./assets/images/post1.jpg')} style={styles.postImage} />
          <Image source={require('./assets/images/post2.jpg')} style={styles.postImage} />
          <Image source={require('./assets/images/post3.jpg')} style={styles.postImage} />
          <Image source={require('./assets/images/post4.jpg')} style={styles.postImage} />
          <Image source={require('./assets/images/post5.jpg')} style={styles.postImage} />
          <Image source={require('./assets/images/post6.jpg')} style={styles.postImage} />
        </View>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    // marginBottom: 20,
    marginVertical: 20,
  },
  topSection: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  rightSection: {
    width: '60%',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  name: {
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal: 15,
  },
  bio: {
    marginTop: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  followButton: {
    flex: 1,
    // backgroundColor: '#0095f6',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginRight: 5,
  },
  messageButton: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginLeft: 5,
  },
  followText: {
    // color: 'white',
    fontWeight: 'bold',
  },
  messageText: {
    fontWeight: 'bold',
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  postImage: {
    width: '32%',
    aspectRatio: 1,
    margin: 1
  },
});