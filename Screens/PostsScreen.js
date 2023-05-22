import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Публикации</Text>
        <TouchableOpacity>
          <Icon name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Image source={require("../assets/images/usersmall.jpg")} />
        <View>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.mail}>email@example.com</Text>
        </View>
      </View>
      <ScrollView style={{ width: "100%", paddingLeft: 16, paddingRight: 16 }}>
        <View style={styles.imageContainer}>
          <Image
            style={{ borderRadius: 8, width: "100%" }}
            source={require("../assets/images/firstimage.jpg")}
          />
          <Text style={styles.imageTitle}>Лес</Text>
          <View style={styles.imageInfo}>
            <View style={styles.itemsWrapper}>
              <TouchableOpacity>
                <Icon name="message-circle" size={18} color="#BDBDBD" />
              </TouchableOpacity>
              <Text style={{ marginLeft: 9 }}>0</Text>
            </View>
            <View style={styles.itemsWrapper}>
              <Icon name="map-pin" size={24} color="#BDBDBD" />
              <Text style={{ marginLeft: 4 }}>Ivano-Frankivsk</Text>
            </View>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={{ borderRadius: 8, width: "100%" }}
            source={require("../assets/images/secondimage.jpg")}
          />
          <Text style={styles.imageTitle}>Лес</Text>
          <View style={styles.imageInfo}>
            <View style={styles.itemsWrapper}>
              <TouchableOpacity>
                <Icon name="message-circle" size={18} color="#BDBDBD" />
              </TouchableOpacity>
              <Text style={{ marginLeft: 9 }}>0</Text>
            </View>
            <View style={styles.itemsWrapper}>
              <Icon name="map-pin" size={24} color="#BDBDBD" />
              <Text style={{ marginLeft: 4 }}>Ivano-Frankivsk</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  titleWrapper: {
    flexDirection: "row",
    marginTop: 44,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#212121",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    width: "100%",
  },
  title: {
    paddingTop: 11,
    paddingBottom: 11,
    color: "#212121",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    flex: 1,
    textAlign: "center",
  },
  name: {
    marginLeft: 8,
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  mail: {
    marginLeft: 8,
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  imageContainer: {
    display: "flex",
    // flex: 0.37,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 299,
    width: "100%",
    borderRadius: 8,

    marginTop: 32,
  },
  imageTitle: {
    // textAlign: "left",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginTop: 8,
  },
  imageInfo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 11,
  },

  profileInfo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 16,
    marginTop: 32,
  },
  itemsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PostsScreen;
