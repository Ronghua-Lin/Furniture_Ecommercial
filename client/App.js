import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {
  NewRivals,
  ProductDetail,
  EditProfile,
  ShoppingCart
} from "./screens";
import ContextProvider from "./Utils/contextAPI";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const stack = createNativeStackNavigator();
  const [fontsLoaded, fontError] = useFonts({
    regular: require("./assets/fonts/InterDisplay-Regular.ttf"),
    light: require("./assets/fonts/InterDisplay-Light.ttf"),
    bold: require("./assets/fonts/InterDisplay-Bold.ttf"),
    medium: require("./assets/fonts/InterDisplay-Medium.ttf"),
    extrabold: require("./assets/fonts/InterDisplay-ExtraBold.ttf"),
    semibold: require("./assets/fonts/InterDisplay-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ContextProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <stack.Navigator initialRouteName="BottomTabNavigation">
          <stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="ProductList"
            component={NewRivals}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="ShoppingCart"
            component={ShoppingCart}
            options={{
              headerShown: false,
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
