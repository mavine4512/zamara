import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { CommonActions } from "@react-navigation/routers";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Icon from "../../components/icon";
import LoginImg from "../../assets/images/login.png";
import { white } from "../../utilities/color";
import { moderateScale } from "react-native-size-matters";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const LoginAction = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        // saveUser(res);
        navigation.navigate("Home");
        // _redirect("Home");
        setPassword(""), setUsername("");
      });
    (error) => {
      console.log("error", error);
    };
  };

  const handleLogin = () => {
    // Check if email is valid
    if (username == "") {
      Alert.alert("Invalid user name", "Please enter a valid user name.");
      return;
    }

    // Check if password is valid
    if (!password || password.length < 6) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 6 characters long."
      );
      return;
    }
    LoginAction();
  };
  const _redirect = (page) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: page }],
      })
    );
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <StatusBar
        hidden={false}
        translucent={true}
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
      />
      <View>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.loginimg} source={LoginImg} />
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        <Animatable.View
          animation="slideInUp"
          useNativeDriver
          easing={"ease-in-out-cubic"}
          style={styles.animatableContent}
        >
          <Text style={styles.signInText}>Signin</Text>
          <View>
            <View style={styles.textInput}>
              <Icon
                name="user"
                type={"Entypo"}
                size={20}
                color={white}
                style={styles.icons}
              />
              <TextInput
                onChangeText={(text) => setUsername(text)}
                value={username}
                style={styles.TextItems}
                placeholder="Enter your user name"
                placeholderTextColor={white}
              />
            </View>
            <View style={styles.textInput}>
              <Icon
                name="locked"
                type={"Fontisto"}
                size={20}
                color={white}
                style={styles.icons}
              />
              <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                style={styles.TextItems}
                placeholder="Enter your password"
                placeholderTextColor={white}
              />
            </View>
            <View style={{ marginTop: moderateScale(30) }}>
              <Button title="Login" onPress={handleLogin} />
            </View>
          </View>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
