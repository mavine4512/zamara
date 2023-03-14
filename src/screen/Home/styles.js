import { StatusBar } from "react-native";
import { primary, black, Grey, white } from "../../utilities/color";
import { moderateScale } from "react-native-size-matters";

export default {
  homeContainer: {
    flex: 1,
  },
  homeSubContainer: {
    marginHorizontal: moderateScale(12),
    marginVertical: moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gretNames: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(14),
    fontWeight: "500",
    // color: Grey,
  },
  fullNames: {
    fontWeight: "bold",
    color: black,
  },
  headerText: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(14),
    fontWeight: "bold",
    marginLeft: moderateScale(15),
    marginBottom: moderateScale(30),
  },
  viewInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(15),
    marginBottom: moderateScale(25),
    backgroundColor: "#9de19a",
    paddingVertical: moderateScale(10),
  },
  textsData: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: black,
  },
  data: {
    color: Grey,
  },
};
