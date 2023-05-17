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
  Dimensions,
} from "react-native";

const LoginScreen = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [mailFocus, setMailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  // const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  // useEffect(() => {
  //   const onChange = ({ window }) => {
  //     setDimensions(window);
  //   };

  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);
  const handleMailChange = (text) => {
    setMail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    console.log("Logined:", { password, mail });
    setMail("");
    setPassword("");
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };
  // const { width, height } = dimensions;
  // const isPortrait = height > width;
  return (
    <View style={{ ...styles.container }}>
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
              behavior={Platform.OS === "ios" ? "padding" : null}
            >
              <Text style={styles.title}>Войти</Text>

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
                  <Text style={styles.buttonTextRegister}>
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
  horizontalWrapper: {
    flex: 0.8,
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
