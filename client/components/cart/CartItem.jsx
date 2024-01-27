import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import styles from "./cartItem.style";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";

function CartItem({ item, setCart }) {
  const toggleCheckBox = () => {
    setCart((prev) => {
      const newCart = prev.map((olditem) => {
        return olditem.item._id === item.item._id
          ? {
              ...olditem,
              check: !olditem.check,
            }
          : olditem;
      });
      return newCart;
    });
  };
  const handleDelete = () => {
    setCart((prev) => {
      const newCart = prev.filter(
        (olditem) => olditem.item._id !== item.item._id
      );
      return newCart;
    });
  };

  const increaseQuantity = () => {
    setCart((prev) => {
      const newCart = prev.map((olditem) => {
        return olditem.item._id === item.item._id
          ? {
              ...olditem,
              quantity: olditem.quantity + 1,
            }
          : olditem;
      });
      return newCart;
    });
  };

  const decreaseQuantity = () => {
    setCart((prev) => {
      const newCart = prev.map((olditem) => {
        return olditem.item._id === item.item._id
          ? {
              ...olditem,
              quantity: olditem.quantity > 1 ? olditem.quantity - 1 : 1,
            }
          : olditem;
      });
      return newCart;
    });
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleCheckBox()}
      >
        <Fontisto
          name={item.check ? "checkbox-active" : "checkbox-passive"}
          size={30}
          color="black"
        />
      </TouchableOpacity>

      <Image source={{ uri: item.item.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.item.title}</Text>

        <View style={styles.secondRow}>
          <View style={styles.quantityContainer}>
            <Text style={styles.priceText}>
              ${item.item.price * item.quantity}
            </Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <SimpleLineIcons name="plus" size={24} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={decreaseQuantity}>
              <SimpleLineIcons name="minus" size={24} />
            </TouchableOpacity>
          </View>

          <View>
            <Button title="Delete" onPress={handleDelete} />
          </View>
        </View>
      </View>

      {/* <TouchableOpacity onPress={() => {}}>
      {/* Icon for delete 
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      {/* Icon for save for later 
    </TouchableOpacity>*/}
    </View>
  );
}
export default CartItem;
