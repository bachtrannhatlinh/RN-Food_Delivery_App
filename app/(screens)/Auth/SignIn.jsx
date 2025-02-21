import { useRouter } from "expo-router";
import { Icon, Button, SocialIcon } from "@rneui/base";
import * as Animatable from "react-native-animatable";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
} from "react-native";

import Header from "../../components/Header";

import { colors, parameters } from "../../global/styles";

export default function SignInScreen() {
  const router = useRouter();

  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const [text, setPassword] = useState("");

  const goToWelcomeScreen = () => {
    router.push("/ClientTabs");
  };

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT1" type="arrow-left" />

      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={styles.title}>Sign In</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput style={styles.TextInput1} placeholder="Email" />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Fossued ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{}}
            />
          </Animatable.View>

          <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
          />

          <Animatable.View
            animation={textInput2Fossued ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styleButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => goToWelcomeScreen()}
          ></Button>
        </View>

        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
        </View>

        <View style={{ marginHorizontal: 10, marginTop: 10 }}>
          <SocialIcon
            title="Sign In With Facebook"
            button
            type="facebook"
            style={styles.SocialIcon}
            onPress={() => {}}
          />
        </View>

        <View style={{ marginHorizontal: 10, marginTop: 10 }}>
          <SocialIcon
            title="Sign In With Google"
            button
            type="google"
            style={styles.SocialIcon}
            onPress={() => {}}
          />
        </View>

        <View style={{ marginTop: 25, marginLeft: 20 }}>
          <Text style={{ ...styles.text1 }}>New on XpressFood ?</Text>
        </View>

        <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
          <Button
            title="Create an account"
            buttonStyle={styles.styleButton}
            titleStyle={styles.buttonTitle}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: colors.grey3,
    fontSize: 16,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#86939e",
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
    width: "97%",
  },

  styleButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 40,
    paddingHorizontal: 20,
  },

  buttonTitle: {
    color: "#ff8c52",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
