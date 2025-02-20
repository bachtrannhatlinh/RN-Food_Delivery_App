import { Icon } from "@rneui/themed";
import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { colors, parameters } from "../global/styles";

interface FoodCardProps {
  OnPressFoodCard?: string;
  restaurantName: string;
  deliveryAvailable?: boolean;
  discountPercent?: number;
  numberOfReviews: number;
  businessAddress: string;
  farAway: number;
  averageReview: number;
  image: string;
  screenWidth?: number;
}

export default function Header({
  OnPressFoodCard,
  averageReview,
  businessAddress,
  deliveryAvailable,
  discountPercent,
  farAway,
  image,
  numberOfReviews,
  restaurantName,
  screenWidth,
}: FoodCardProps) {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          style={{ ...styles.image, width: screenWidth }}
          source={{ uri: image }}
        />

        <View>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                color={colors.grey2}
                size={18}
                iconStyle={{ marginTop: 3 }}
              />
              <Text style={styles.min}>{farAway} Min</Text>
            </View>

            <View style={{ flex: 9, flexDirection: "row" }}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={styles.numberOfReviews}>{numberOfReviews} reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150,
  },

  restaurantName: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 10,
  },

  distance: {
    flex: 4,
    flexDirection: "row",
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },

  min: {
    color: colors.grey3,
    fontSize: 12,
    paddingTop: 5,
    fontWeight: "bold",
  },

  address: {
    color: colors.grey3,
    fontSize: 12,
    paddingHorizontal: 10,
    paddingTop: 5,
  },

  review: {
    position: "absolute",
    top: 0,
    right: 10,
    backgroundColor: "rgba(52, 52, 52, 0.3)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },

  average: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },

  numberOfReviews: {
    color: "white",
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0,
  },
});
