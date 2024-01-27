import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React,{useContext} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import {Ionicons,Fontisto} from "@expo/vector-icons"
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";
import { ContextAPI } from "../Utils/contextAPI";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const { cart } = useContext(ContextAPI);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
            <Ionicons name="location-outline" size={24} />
            <Text style={styles.location}>New York, US</Text>
            <View style={{alignItems:"flex-end"}} >
                <View style={styles.cartCount}>
                    <Text style={styles.cartNumber}>{cart.length}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("ShoppingCart")}>
                <Fontisto name="shopping-bag" size={24}  />
                </TouchableOpacity>
            </View>
        </View>
      </View>
      <ScrollView >
        <Welcome/>
        <Carousel/>
        <Headings/>
        <ProductRow/>
        
        <View style={{height:100}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
