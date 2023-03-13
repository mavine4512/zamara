import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../components/context";
import { primary } from "../../utilities/color";
import { moderateScale } from "react-native-size-matters";
function Logout(navigation) {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <TouchableOpacity
        onPress={() => logout()}
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: moderateScale(30),
          backgroundColor: "red",
          height: moderateScale(30),
          marginHorizontal: moderateScale(20),
          marginVertical: moderateScale(150),
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
