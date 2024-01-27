import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  checkbox: {
    padding: 5,
    width: "12%",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
  priceText: {
    marginRight: 15,
  },
  secondRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  quantityText: {
    color: COLORS.gray,
    fontFamily: "medium",
    paddingHorizontal: SIZES.xSmall,
  },

});

export default styles;
