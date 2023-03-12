import { StatusBar } from "react-native";
import { primary, black, white } from "../../utilities/color";
import { moderateScale } from "react-native-size-matters";

export default {
  loginContainer: {
    justifyContent: "center",
    backgroundColor: white,
  },
  loginimg: {
    height: moderateScale(220),
    width: moderateScale(220),
  },
  welcomeText: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(28),
    fontWeight: "bold",
    color: black,
    marginBottom: moderateScale(10),
  },
  signInText: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(25),
    fontWeight: "500",
    color: white,
    marginVertical: moderateScale(20),
    margingLeft: moderateScale(10),
  },
  animatableContent: {
    backgroundColor: primary,
    height: moderateScale(380),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  textInput: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: white,
    marginBottom: moderateScale(20),
  },
  icons: {
    marginRight: moderateScale(15),
    marginTop: moderateScale(13),
  },
  TextItems: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(14),
    fontWeight: "400",
    color: white,
  },
};
