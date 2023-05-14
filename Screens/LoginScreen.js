import React, { useState, useEffect } from "react";
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
} from "react-native";

const LoginScreen = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const handleMailChange = (text) => {
    setMail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    console.log("Logined:", password, mail);
    setMail("");
    setPassword("");
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setIsKeyboardOpen;
        }}
      >
        <ImageBackground
          source={{ uri: "https://i.ibb.co/Cbzdmd8/Photo-BG.png" }}
          style={{ flex: 1, width: "100%", justifyContent: "flex-end" }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
              setIsKeyboardOpen(false);
            }}
          >
            <KeyboardAvoidingView
              style={styles.formWrapper}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Войти</Text>
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                value={mail}
                onChangeText={handleMailChange}
                onFocus={() => setIsKeyboardOpen(true)}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry
                value={password}
                onChangeText={handlePasswordChange}
                onFocus={() => setIsKeyboardOpen(true)}
              />
              <View
                style={{
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  style={{
                    ...styles.button,
                  }}
                  onPress={handleLogin}
                >
                  <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister}>
                  <Text style={styles.buttonTextRegister}>
                    Нет аккаунта? Зарегистрироватся
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  formWrapper: {
    flex: 0.6,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: {
    width: 184,
    height: 35,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 33,
    marginTop: 32,
    textAlign: "center",
    color: "#000000",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  },

  button: {
    width: "100%",
    display: "flex",
    height: 51,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 27,
  },
  buttonText: {
    color: "white",
  },
  buttonRegister: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 19,
  },
  buttonTextRegister: {
    color: "#1B4371",
  },
});

export default LoginScreen;
