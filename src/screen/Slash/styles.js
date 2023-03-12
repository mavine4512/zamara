import { StatusBar } from "react-native";
import { primary, black, white } from "../../utilities/color";
import { moderateScale } from "react-native-size-matters";

export default {
  SlashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
  },
  SlashLoading: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: primary,
    marginVertical: moderateScale(20),
    margingLeft: moderateScale(10),
  },
};
