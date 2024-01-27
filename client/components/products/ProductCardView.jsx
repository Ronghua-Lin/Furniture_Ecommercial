import { View, Text, TouchableOpacity, Image, Touchable } from "react-native";
import React,{useContext} from "react";
import styles from "./ProductCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ContextAPI } from "../../Utils/contextAPI";

const ProductCardView = ({item}) => {
  const { cart,setCart } = useContext(ContextAPI);
  const navigation = useNavigation();
  const addToCart=()=>{
 
    if(cart.find((bag)=>bag.item._id===item._id)!==undefined){
      cart.find((bag)=>bag.item._id===item._id).quantity+=1
    }
    else {

      setCart([...cart,{
        quantity:1,
        item:item,
        check:true
      }])
    }
  }
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", item._id)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
          {item.supplier}
          </Text>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity style={styles.addBtn} >
            <Ionicons name="add-circle" size={35} color={COLORS.primary} onPress={() =>addToCart()}/>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
