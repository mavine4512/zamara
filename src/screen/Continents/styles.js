import { StatusBar } from "react-native";
import { primary, black, secondary, white } from "../../utilities/color";
import { moderateScale } from "react-native-size-matters";

export default {
  continentsContainer: {
    flex: 1,
  },
  continentsTital: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(16),
    fontWeight: "bold",
    marginLeft: moderateScale(15),
    marginTop: moderateScale(15),
    marginBottom: moderateScale(30),
    color: primary,
  },
  loadingText: {
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: primary,
  },
  dataText: {
    marginLeft: moderateScale(15),
    flexDirection: "row",
  },
  code: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(16),
    fontWeight: "bold",
    marginBottom: moderateScale(20),
    color: black,
  },
  name: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(14),
    color: secondary,
  },
};
