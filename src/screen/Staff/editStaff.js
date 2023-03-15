import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
// import styles from "./styles";
import Icon from "../../components/icon";
import { primary, black, white } from "../../utilities/color";
import { moderateScale } from "react-native-size-matters";
import { TouchableOpacity } from "react-native-gesture-handler";

class EditStaff extends Component {
  constructor(props) {
    super(props);
    state = {
      staffName: "",
      staffNumber: "",
      email: "",
      dep: "",
      salary: "",
    };
  }

  EditStaff = () => {
    console.log("new user ");
  };
  render() {
    return (
      <SafeAreaView
        style={{
          marginHorizontal: moderateScale(20),
          marginVertical: moderateScale(20),
        }}
      >
        <StatusBar
          hidden={false}
          translucent={true}
          barStyle={"dark-content"}
          backgroundColor={"transparent"}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            marginVertical: moderateScale(20),
          }}
        >
          <Icon
            name="arrowleft"
            type={"AntDesign"}
            size={15}
            color={black}
            style={styles.icons}
          />
        </TouchableOpacity>
        <View
          style={{
            marginBottom: moderateScale(10),
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: moderateScale(18),
              fontWeight: "bold",
              color: black,
            }}
          >
            EDIT A Staff
          </Text>
        </View>
        <View>
          <TextInput
            onChangeText={(text) => this.setState({ staffName: text })}
            style={styles.TextItems}
            placeholder="Shalom Ogoziem"
          />
          <TextInput
            onChangeText={(text) => this.setState({ staffNumber: text })}
            style={styles.TextItems}
            placeholder="ZAA8004"
          />
          <TextInput
            onChangeText={(text) => this.setState({ email: text })}
            style={styles.TextItems}
            placeholder="shalom123@gmail.com"
          />
          <TextInput
            onChangeText={(text) => this.setState({ dep: text })}
            style={styles.TextItems}
            placeholder="DATA ENTRY"
          />
          <TextInput
            onChangeText={(text) => this.setState({ salary: text })}
            style={styles.TextItems}
            placeholder="12000"
          />
          <View style={{ marginTop: moderateScale(20) }}>
            <Button title="EDIT staff" onPress={() => this.EditStaff()} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default EditStaff;

const styles = StyleSheet.create({
  TextItems: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(14),
    fontWeight: "400",
    color: black,
    borderWidth: 0.5,
    borderBottomColor: black,
    marginBottom: moderateScale(10),
  },
});
