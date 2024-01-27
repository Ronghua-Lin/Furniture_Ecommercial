import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.small)}>
          Welcome
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Luxuery Furniture
        </Text>
      </View>
     
    </View>
  );
};

export default Welcome;
