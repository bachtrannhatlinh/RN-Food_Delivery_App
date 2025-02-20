import { Icon } from "@rneui/base";
import Countdown from "react-native-countdown-component";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";

import HomeHeader from "@/app/components/HomeHeader";
import FoodCard from "@/app/components/FoodCard";

import { filterData, restaurantsData } from "../../global/Data";

import { colors } from "../../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState(0);

  return (
    <View style={styles.container}>
      <HomeHeader />

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{ backgroundColor: colors.cardbackground, paddingBottom: 5 }}
        >
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity onPress={() => setDelivery(true)}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey4,
                }}
              >
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setDelivery(false)}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey4 : colors.buttons,
                }}
              >
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>22 Beessie Street</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id.toString()}
            extraData={indexCheck}
            renderItem={({ item }) => (
              <Pressable onPress={() => setIndexCheck(item.id)}>
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 30 }}
                    source={{
                      uri: item.image,
                    }}
                  />

                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...styles.smallCardTextSelected }
                          : { ...styles.smallCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery Now</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5,
                justifyContent: "center",
              }}
            >
              Options changing in
            </Text>
            <Countdown
              until={3600}
              size={14}
              digitStyle={{ backgroundColor: colors.lightgreen }}
              digitTxtStyle={{ color: colors.cardbackground }}
              timeToShow={["M", "S"]}
              timeLabels={{ m: "Min", s: "Sec" }}
            />
          </View>

          <FlatList
            horizontal={true}
            style={{ marginTop: 10, marginBottom: 10 }}
            showsHorizontalScrollIndicator={false}
            data={restaurantsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  image={item.image}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReviews={item.numberOfReviews}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions available</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            style={{ marginTop: 10, marginBottom: 10 }}
            showsHorizontalScrollIndicator={false}
            data={restaurantsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  image={item.image}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReviews={item.numberOfReviews}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants in your Area</Text>
        </View>

        <View style={{ width: SCREEN_WIDTH, paddingTop: 20 }}>
          {restaurantsData.map((item) => (
            <View key={item.id} style={{ marginRight: 5, marginTop: 5 }}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                image={item.image}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReviews={item.numberOfReviews}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },

  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },

  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },

  filterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
  },

  addressView: {
    flexDirection: "row",
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginRight: 20,
  },

  clockView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.grey1,
    paddingLeft: 10,
  },

  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },

  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  smallCardTextSelected: {
    fontWeight: "bold",
    color: colors.cardbackground,
  },

  smallCardText: {
    fontWeight: "bold",
    color: colors.grey2,
  },
});
