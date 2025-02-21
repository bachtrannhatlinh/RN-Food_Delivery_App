import { Icon } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import HomeScreen from "./(screens)/Home";
import SearchScreen from "./(screens)/Search";
import MyOrdersScreen from "./(screens)/Orders";
import AccountScreen from "./(screens)/Account";

import { colors, parameters } from "./global/styles";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      screenOptions={{ tabBarActiveTintColor: colors.buttons }}
    >
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: "My Orders",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: "My Account",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}
