import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Создать публикацию</Text>
      </View>
      <View
        style={{ flex: 0.3, width: "100%", paddingLeft: 16, paddingRight: 16 }}
      >
        <View style={styles.imageContainer}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              backgroundColor: "#FFFFFF",
            }}
          ></View>
        </View>
        <Text style={styles.loadImgBtn}>Загрузите фото</Text>
        <TextInput style={styles.input} placeholder="Название" />
        <TextInput style={styles.input} placeholder="Местность" />
        <TouchableOpacity style={styles.btnActive}>
          <Text style={styles.btnText}>Опубликовать</Text>
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
    // flex: 0.11,
    marginTop: 44,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#212121",
    borderBottomWidth: 1,
    width: "100%",
  },
  title: {
    paddingTop: 11,
    paddingBottom: 11,
    color: "#212121",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginTop: 32,
  },
  loadImgBtn: {
    marginTop: 8,
    color: "#BDBDBD",
  },
  input: {
    paddingTop: 16,
    paddingBottom: 15,
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  btnText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  btnActive: {
    marginTop: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
});

export default CreatePostsScreen;
