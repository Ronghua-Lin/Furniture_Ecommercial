import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./productRow.style";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";
const ProductRow = () => {
  const { data, isLoading, error, refetch } = useFetch();
 
  return (
    <View style={{ marginTop: SIZES.medium, marginLeft: 12 }}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something is Wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => <ProductCardView item={item}/>}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;
