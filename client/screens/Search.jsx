import {
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  Alert,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import styles from "./search.style";
import { useState } from "react";
import SearchTile from "../components/products/SearchTile";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = async () => {
    if (searchKey.trim() === "") {
      Alert.alert(
        'input empty',
        'Please type something for search',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable: true }
      );
    } else {
      try {
        const res = await fetch(
          process.env.EXPO_PUBLIC_API_URL + `/search/${searchKey}`
        );
        const data = await res.json();
        setSearchResult(data);
      } catch (err) {
        console.log("failed to search data");
      }
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={{ paddingLeft: 10 }}>
          <Ionicons name="camera-outline" size={SIZES.xLarge} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View style={styles.searchBtn}>
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length === 0 ? (
        <View style={{ justifyContent: "center" }}>
          <Image
            source={{
              uri: "https://cdn.iconscout.com/icon/free/png-256/free-prompt-search-8318817-6887564.png",
            }}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
