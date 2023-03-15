import { StatusBar } from "react-native";
import { primary, black, white } from "../../utilities/color";
import { moderateScale } from "react-native-size-matters";

export default {
  fab: {
    position: "absolute",
    margin: moderateScale(16),
    right: 0,
    bottom: 0,
    padding: moderateScale(10),
    borderRadius: moderateScale(30),
    backgroundColor: primary,
    alignItems: "center",
    justifyContent: "center",
  },
};
