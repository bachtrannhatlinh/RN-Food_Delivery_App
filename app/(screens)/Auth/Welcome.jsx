import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Swiper from "react-native-swiper";
import { Icon, Button, SocialIcon } from "@rneui/base";

import { useRouter } from 'expo-router';

import { colors, parameters } from "../../global/styles";

export default function WelcomeScreen() {
  const router = useRouter();

  const goToSignInScreen = () => {
    router.dismissTo('/Home')
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 20,
          maxHeight: 200,
        }}
      >
        <Text
          style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}
        >
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}
        >
          IN YOUR AREA
        </Text>
      </View>

      <View style={{ flex: 4, width: "100%" }}>
        <Swiper autoplay={false}>
          <View
            style={[styles.slide, { width: Dimensions.get("window").width }]}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/meat-plate-with-potatoes-souce_144627-6148.jpg",
              }}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>

          <View
            style={[styles.slide, { width: Dimensions.get("window").width }]}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/thai-food-noodles-spicy-boil-with-pork-boil-egg_1150-27967.jpg",
              }}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>

          <View
            style={[styles.slide, { width: Dimensions.get("window").width }]}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/stir-fry-spaghetti-put-pork-bowl_1150-24192.jpg",
              }}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ flex: 4, justifyContent: "flex-end", marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styleButton}
            titleStyle={parameters.buttonStyle}
            onPress={() => goToSignInScreen()}
          />
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createTitle: {
    color: colors.grey1,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
