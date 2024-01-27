import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../constants";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  avatorContainer: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: COLORS.primary,
    borderWidth: 2,
    marginTop: -90,
  },
  title: {
    ...FONT.h3,
    color: COLORS.primary,
    marginVertical: 8,
  },
  subTitle: {
    color: COLORS.black,
    ...FONT.body4,
  },
  locationContainer: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "center",
  },
  location: {
    ...FONT.body4,
    marginLeft: 4,
  },
  subscriptionContainer: {
    paddingVertical: 8,
    gap: 10,
    flexDirection: "row",
  },
  subscriptionBox: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: SIZES.padding,
  },
  subscriptionNumber: {
    ...FONT.h2,
    color: COLORS.primary,
  },
  subscriptionText: {
    ...FONT.body4,
    color: COLORS.primary,
  },
  Btn: {
    width: 124,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  BtnText:{
    ...FONT.body4,
    color: COLORS.white,
  }
});

export default styles;
