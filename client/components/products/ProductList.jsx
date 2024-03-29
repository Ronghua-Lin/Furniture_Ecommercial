import { FlatList, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./productList.style";
import useFetch from "../../hook/useFetch";
import {SIZES,COLORS} from "../../constants"
import ProductCardView from "./ProductCardView";
const ProductList = () => {
  const { data, isLoading, error } = useFetch();
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item})=> (<ProductCardView item={item} />) }
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={()=><View style={styles.seperator} />}
      />
    </View>
  );
};

export default ProductList;
