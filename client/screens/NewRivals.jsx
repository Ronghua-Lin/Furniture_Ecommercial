import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import styles from "./newRivals.style";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons"
import ProductList from "../components/products/ProductList";
const NewRivals = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite}/>
        </TouchableOpacity>
        <Text style={styles.heading}> Home</Text>
        </View>
        <ProductList/>
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
