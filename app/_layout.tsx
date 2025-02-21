import { Redirect, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../context/ThemeContext"


export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Redirect href="/Auth/SignIn" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="/ClientTabs" />
          <Stack.Screen name="/Auth/Welcome" />
          <Stack.Screen name="/Auth/SignIn" />
          <Stack.Screen name="/Auth/Search" />
          <Stack.Screen name="/(screens)/RestaurantMap" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}