import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      footer: {
        padding: 10,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems: "center",
      },
      line: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 10,
      },
      cartBtn: {
        width: SIZES.screenWidth * 0.3,
        backgroundColor: COLORS.black,
        padding: SIZES.small / 2,
        borderRadius: SIZES.large,
        marginLeft: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
      },
      cartTitle: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color:"white"
      },
      priceText:{
        fontFamily:"bold",
        fontSize:SIZES.large
      }

});

export default styles;
