import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../components/context";
function Logout(navigation) {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Logout;
