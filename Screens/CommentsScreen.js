import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.title}>Коментарии</Text>
      </View>

      <ScrollView style={{ width: "100%", paddingLeft: 16, paddingRight: 16 }}>
        <Image
          style={{ borderRadius: 8, width: "100%", marginTop: 32 }}
          source={require("../assets/images/firstimage.jpg")}
        />
        <View style={styles.commentContainer}>
          <Image
            style={styles.avatar}
            source={require("../assets/images/user-coment.jpg")}
          />
          <View style={styles.commentWrapper}>
            <Text style={styles.comment}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <View style={styles.dateWrapper}>
              <Text style={styles.date}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>
        </View>
        <View style={styles.commentContainer}>
          <View style={{ ...styles.commentWrapper, marginRight: 16 }}>
            <Text style={styles.comment}>
              A fast 50mm like f1.8 would help with the bokeh. I’ve been using
              primes as they tend to get a bit sharper images.
            </Text>
            <View style={styles.dateWrapper}>
              <Text style={styles.date}>09 июня, 2020 | 09:14</Text>
            </View>
          </View>
          <Image
            style={styles.avatar}
            source={require("../assets/images/usersmall.jpg")}
          />
        </View>
        <View style={styles.commentContainer}>
          <Image
            style={styles.avatar}
            source={require("../assets/images/user-coment.jpg")}
          />
          <View style={styles.commentWrapper}>
            <Text style={styles.comment}>
              Thank you! That was very helpful!
            </Text>
            <View style={styles.dateWrapper}>
              <Text style={styles.date}>09 июня, 2020 | 09:20</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 16, position: "relative" }}>
        <TextInput style={styles.input} placeholder="Комментировать..." />
        <TouchableOpacity style={styles.buttonSend}>
          <Icon
            style={{ borderRadius: 100 }}
            name="arrow-up"
            size={34}
            color="#FFFFFF"
            backgroundColor="#FF6C00"
          />
        </TouchableOpacity>
      </View>
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
  commentContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  commentWrapper: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginLeft: 16,
  },
  comment: {
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  dateWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 8,
    alignSelf: "flex-end",
  },
  date: {
    fontSize: 12,
    lineHeight: 14,
    color: "#212121",
  },
  input: {
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  buttonSend: {
    position: "absolute",
    right: 23,
    top: "50%",
    transform: [{ translateY: -25 }],
  },
});

export default CommentsScreen;
