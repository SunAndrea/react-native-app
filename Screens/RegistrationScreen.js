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

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFocus, setLoginFocus] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const handleMailChange = (text) => {
    setMail(text);
  };

  const handleLoginChange = (text) => {
    setLogin(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleRegistration = () => {
    console.log("Registrated:", { password, mail, login });
    setMail("");
    setPassword("");
    setLogin("");
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setIsKeyboardOpen(false);
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
              behavior={Platform.OS === "ios" ? "padding" : "padding"}
            >
              <Text style={styles.title}>Регистрация</Text>
              <TextInput
                style={[styles.input, loginFocus && styles.focusInput]}
                placeholder="Логин"
                value={login}
                onChangeText={handleLoginChange}
                onFocus={() => {
                  setIsKeyboardOpen(true);
                  setLoginFocus(true);
                }}
                onBlur={() => {
                  setIsKeyboardOpen(false);
                  setLoginFocus(false);
                }}
              />
              <TextInput
                style={[styles.input, mailFocus && styles.focusInput]}
                placeholder="Адрес электронной почты"
                value={mail}
                onChangeText={handleMailChange}
                onFocus={() => {
                  setIsKeyboardOpen(true);
                  setMailFocus(true);
                }}
                onBlur={() => {
                  setIsKeyboardOpen(false);
                  setMailFocus(false);
                }}
              />
              <TextInput
                style={[styles.input, passwordFocus && styles.focusInput]}
                placeholder="Пароль"
                secureTextEntry
                value={password}
                onChangeText={handlePasswordChange}
                onFocus={() => {
                  setIsKeyboardOpen(true);
                  setPasswordFocus(true);
                }}
                onBlur={() => {
                  setIsKeyboardOpen(false);
                  setPasswordFocus(false);
                }}
              />
              <View
                style={{
                  display: isKeyboardOpen ? "none" : "flex",
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleRegistration}
                >
                  <Text style={styles.buttonText}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin}>
                  <Text style={styles.buttonTextLogin}>
                    Уже есть аккаунт? Войти
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
    borderColor: "#BDBDBD",
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  },
  focusInput: {
    borderColor: "#FF6C00",
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
  buttonLogin: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 19,
  },
  buttonTextLogin: {
    color: "#1B4371",
  },
});

export default RegistrationScreen;
