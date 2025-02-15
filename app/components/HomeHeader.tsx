import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Icon, Button, SocialIcon, withBadge } from "@rneui/themed";

import { colors, parameters } from "../global/styles";

export default function HomeHeader() {
  const BadgeIcon = withBadge(0)(Icon) as any;

  return (
    <View>
      <View style={styles.header}>
        <View style={{ alignItems: 'center', justifyContent: "center", marginLeft: 15 }}>
          <Icon
            type='material-community'
            name="menu"
            size={32}
            color={colors.cardbackground}
          />
        </View>

        <View style={{ alignItems: 'center', justifyContent: "center" }}>
          <Text style={{ color: colors.cardbackground, fontSize: 25, fontWeight: 'bold' }}>XpressFood</Text>
        </View>

        <View style={{ alignItems: 'center', justifyContent: "center", marginRight: 15 }}>
          <BadgeIcon 
            type='material-community'
            name="cart"
            size={35}
            color={colors.cardbackground}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: "space-between",
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30,
  },
});