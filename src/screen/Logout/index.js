import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../components/context";
import { moderateScale } from "react-native-size-matters";
import { primary, black, white } from "../../utilities/color";
function Logout(navigation) {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text
        style={{
          fontFamily: "Roboto-Medium",
          marginTop: moderateScale(10),
          fontSize: moderateScale(14),
          marginHorizontal: moderateScale(20),
          fontWeight: "bold",
          color: black,
          marginBottom: moderateScale(10),
        }}
      >
        if you logout you will you will lose you data
      </Text>
      <TouchableOpacity
        onPress={() => logout()}
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: moderateScale(30),
          backgroundColor: "red",
          height: moderateScale(30),
          marginHorizontal: moderateScale(20),
          marginVertical: moderateScale(50),
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: moderateScale(18),
            fontWeight: "bold",
            color: primary,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Logout;
