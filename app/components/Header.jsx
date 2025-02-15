import React from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../global/styles";

import { Icon } from "@rneui/themed";

import { useRouter } from "expo-router";

export default function Header({ title, type }) {
  const router = useRouter();

  const backWelcome = () => {
    router.dismissTo('Auth/Welcome')
  }


  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <Icon
          type="material-community"
          name={type}
          color={colors.headerText}
          size={28}
          onPress={() => {backWelcome()}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    alignContent: "center",
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30,
  },
});
