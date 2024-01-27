import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT, SIZES } from "../constants";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import useFetch from "../hook/useFetch";
import styles from "./profile.style";
import { useNavigation } from "@react-navigation/native";
import { ContextAPI } from "../Utils/contextAPI";

const Profile = () => {
  const navigation = useNavigation();
  const { data, isLoading } = useFetch();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const { profile } = useContext(ContextAPI);

  const [routes] = useState([
    { key: "first", title: "Photos" },
    { key: "second", title: "Likes" },
  ]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }

  const PhotosRoutes = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item, index) => item._id}
        renderItem={({ item, index }) => {

          return (
            <TouchableOpacity 
            onPress={()=>navigation.navigate("ProductDetail",item._id)}
            style={{
              width: "30%",
              aspectRatio: 1,
              margin: 3,
            }}>

                <Image
                  key={item._id}
                  source={{ url: item.imageUrl }}
                  style={{ width: "100%", height: "100%", borderRadius: 12 }}
                />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );

  const LikesRoutes = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={profile.likes}
        numColumns={3}
        keyExtractor={(item, index) => item._id}
        renderItem={({ item, index }) => {

          return (
            <TouchableOpacity 
            onPress={()=>navigation.navigate("ProductDetail",item._id)}
            style={{
              width: "30%",
              aspectRatio: 1,
              margin: 3,
            }}>

                <Image
                  key={item._id}
                  source={{ url: item.imageUrl }}
                  style={{ width: "100%", height: "100%", borderRadius: 12 }}
                />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );

  const renderScene = SceneMap({
    first: PhotosRoutes,
    second: LikesRoutes,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: COLORS.primary,
      }}
      style={{
        backgroundColor: COLORS.white,
        height: 44,
      }}
      renderLabel={({ focused, route }) => (
        <Text style={[{ color: focused ? COLORS.black : COLORS.gray }]}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.gray} />
      <View style={{ width: "100%" }}>
        <Image
          source={{
            url: "https://images.squarespace-cdn.com/content/v1/5faae6055ecaad060d808fea/d0f3e9d8-4536-4762-bbbf-5450ac5b1610/Fallkill-House-UD-Catskill-Image-6.jpg",
          }}
          resizeMode="cover"
          style={{
            height: 228,
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={{ url: profile.image }}
          resizeMode="contain"
          style={styles.avatorContainer}
        />

        <Text style={styles.title}>{profile.title}</Text>
        <Text style={styles.subTitle}>{profile.role}</Text>

        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text style={styles.location}>{profile.location}</Text>
        </View>

        <View style={styles.subscriptionContainer}>
          <View style={styles.subscriptionBox}>
            <Text style={styles.subscriptionNumber}>122</Text>
            <Text style={styles.subscriptionText}>Followers</Text>
          </View>

          <View style={styles.subscriptionBox}>
            <Text style={styles.subscriptionNumber}>67</Text>
            <Text style={styles.subscriptionText}>Followings</Text>
          </View>

          <View style={styles.subscriptionBox}>
            <Text style={styles.subscriptionNumber}>77K</Text>
            <Text style={styles.subscriptionText}>Likes</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.BtnText}>Edit Profile</Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
