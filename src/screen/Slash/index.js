import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
function Slash() {
  return (
    <View style={styles.SlashContainer}>
      <Text style={styles.SlashLoading}>Loading ...</Text>
    </View>
  );
}

export default Slash;
