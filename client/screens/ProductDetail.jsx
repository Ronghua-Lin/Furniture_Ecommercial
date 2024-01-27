import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect, useContext } from "react";
import { useRoute } from "@react-navigation/native";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "./productDetail.style";
import useFetch from "../hook/useFetch";
import { useNavigation } from "@react-navigation/native";
import { ContextAPI } from "../Utils/contextAPI";

const ProductDetail = () => {
  const { profile, setProfile,cart,setCart } = useContext(ContextAPI);
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params;
  const { fetchDataById } = useFetch();

  const [data, setData] = useState();
  const [count, setCount] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchDataById(id);
      setData(res);
    };

    getData();
  }, []);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  if (!data) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }

  const addToCart=()=>{
 
    if(cart.find((bag)=>bag.item._id===data._id)!==undefined){
      cart.find((bag)=>bag.item._id===data._id).quantity+=count
    }
    else {

      setCart([...cart,{
        quantity:count,
        item:data,
        check:true
      }])
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons
            name="keyboard-arrow-left"
            size={30}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            if(profile.likes.find((like) => like._id === data._id) === undefined){
              setProfile({
                ...profile,
                likes:[...profile.likes,data]
              })
            }
            else{
              const newLikes=profile.likes.filter((like)=>like._id!==data._id)
              setProfile({
                ...profile,
                likes:newLikes
              })
            }
           
        }}>
          <Ionicons
            name={
              profile.likes.find((like) => like._id === data._id) === undefined
                ? "heart-outline"
                : "heart"
            }
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: data.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>${data.price}</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={increaseCount}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={decreaseCount}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>{data.description}</Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>{data.product_location}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free Delivery</Text>
            </View>
          </View>
          <View style={styles.cartRow}>
            <TouchableOpacity onPress={() =>addToCart()} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ShoppingCart")} style={styles.addCart}>
              <Fontisto
                name="shopping-bag"
                size={22}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
