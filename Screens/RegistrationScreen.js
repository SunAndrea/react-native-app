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
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFocus, setLoginFocus] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const navigation = useNavigation();

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
    navigation.navigate("Posts");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsKeyboardOpen(false);
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: "https://i.ibb.co/Cbzdmd8/Photo-BG.png" }}
          style={{ flex: 1, width: "100%", justifyContent: "flex-end" }}
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
            <View style={{ width: "100%" }}>
              <TextInput
                style={[
                  styles.inputPassword,
                  passwordFocus && styles.focusInput,
                ]}
                placeholder="Пароль"
                secureTextEntry={!isPasswordShow ? true : false}
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
              <TouchableOpacity
                onPress={() => setIsPasswordShow(!isPasswordShow)}
                style={styles.showPassword}
              >
                <Text style={styles.buttonTextLogin}>
                  {!isPasswordShow ? "Показать" : "Скрыть"}
                </Text>
              </TouchableOpacity>
            </View>

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
                <Text
                  onPress={() => navigation.navigate("Login")}
                  style={styles.buttonTextLogin}
                >
                  Уже есть аккаунт? Войти
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    fontFamily: "Roboto-Regular",
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
  inputPassword: {
    width: "100%",
    height: 50,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    position: "relative",
  },
  showPassword: {
    position: "absolute",
    right: 16,
    top: 16,
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
