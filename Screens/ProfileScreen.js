import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconLike from "react-native-vector-icons/EvilIcons";
import IconLocation from "react-native-vector-icons/Feather";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://i.ibb.co/Cbzdmd8/Photo-BG.png" }}
        style={{ flex: 1, width: "100%", justifyContent: "flex-end" }}
      >
        <ScrollView
          style={{
            width: "100%",
            paddingLeft: 16,
            paddingRight: 16,
            marginTop: 147,
            backgroundColor: "#FFFFFF",
            position: "relative",
          }}
        >
          <View style={styles.imageContainer}>
            <Image source={require("../assets/images/user-big.jpg")} />
          </View>
          <Text style={styles.name}>Natali Romanova</Text>
          <View>
            <Image
              style={{ borderRadius: 8, width: "100%", marginTop: 33 }}
              source={require("../assets/images/firstimage.jpg")}
            />
            <Text style={styles.imageTitle}>Лес</Text>
            <View style={styles.rowContainer}>
              <View style={styles.iconContainer}>
                <Icon name="comment" size={24} color="#FF6C00" />
              </View>
              <Text style={styles.text}>8</Text>

              <View style={styles.iconContainer}>
                <IconLike name="like" size={24} color="#FF6C00" />
              </View>
              <Text style={styles.text}>100</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",

                  marginLeft: "auto",
                }}
              >
                <View style={styles.iconContainer}>
                  <IconLocation name="map-pin" size={24} color="#BDBDBD" />
                </View>
                <Text style={styles.text}>Location</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  name: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginTop: 32,

    color: "#212121",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: -60,
  },
  imageTitle: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginTop: 8,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    marginRight: 16,
  },
});
export default ProfileScreen;
