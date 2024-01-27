import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "../components/cart/CartItem";
import { MaterialIcons } from "@expo/vector-icons";
import { ContextAPI } from "../Utils/contextAPI";
import { COLORS, FONT } from "../constants";
import styles from "./shoppingCart.style";

const ShoppingCart = ({ navigation }) => {
  const { cart, setCart } = useContext(ContextAPI);

  const handleCheckout = () => {
    // Handle the checkout process
  };

  // const calculateTotal = () => {
  //   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  // };
  const TotalPrice=()=>{
    const result=cart.reduce((prev,cur)=>{
      prev+=cur.quantity*cur.check*cur.item.price
      return prev
    },0)
    return result
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={30}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Text style={{ ...FONT.h3 }}>Shopping Cart</Text>
      </View>
      <View style={styles.line} />

      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem item={item} setCart={setCart} />}
        keyExtractor={(bag) => bag.item._id}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Text style={styles.priceText}>${TotalPrice()}</Text>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ShoppingCart;
