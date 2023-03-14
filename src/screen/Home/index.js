import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
const data = {
  email: "kminchelle@qq.com",
  firstName: "Jeanne",
  gender: "female",
  id: 15,
  image: "https://robohash.org/autquiaut.png",
  lastName: "Halvorson",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY3ODgzMDAzNSwiZXhwIjoxNjc4ODMzNjM1fQ.TkSEHwwlbnKQfUAbR7ckxzFaFX_1os4RTBzitOR6EME",
  username: "kminchelle",
  age: 26,
  phone: "+86 581 108 7855",
  bloodGroup: "A−",
  height: 189,
  weight: 75.4,
  birthDate: "1996-02-02",
  eyeColor: "Green",
};
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("props.user", this.props.user);
  }
  render() {
    return (
      <View style={styles.homeContainer}>
        <StatusBar
          hidden={false}
          translucent={true}
          barStyle={"dark-content"}
          backgroundColor={"transparent"}
        />
        <View style={styles.homeSubContainer}>
          <Text style={styles.gretNames}>
            Welcome{" "}
            <Text style={styles.fullNames}>
              {data.firstName} {data.lastName}
            </Text>
          </Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={{ uri: data.image }}
          />
        </View>
        <View>
          <Text style={styles.headerText}>
            Your Profile details is as below:
          </Text>
          <View style={styles.viewInfo}>
            <Text style={styles.textsData}>
              Age: <Text style={styles.data}>{data.age}</Text>
            </Text>
            <Text style={styles.textsData}>
              Gender: <Text style={styles.data}>{data.gender}</Text>
            </Text>
          </View>
          <View style={[styles.viewInfo, { backgroundColor: "#a4c5ea" }]}>
            <Text style={styles.textsData}>
              Birth Date: <Text style={styles.data}>{data.birthDate}</Text>
            </Text>
            <Text style={styles.textsData}>
              Phone: <Text style={styles.data}>{data.phone}</Text>
            </Text>
          </View>
          <View style={[styles.viewInfo, { backgroundColor: "#bca9e1" }]}>
            <Text style={styles.textsData}>
              Email: <Text style={styles.data}>{data.email}</Text>
            </Text>

            <Text style={styles.textsData}>
              Blood Group: <Text style={styles.data}>{data.bloodGroup}</Text>
            </Text>
          </View>
          <View style={[styles.viewInfo, { backgroundColor: "#e7eca3" }]}>
            <Text style={styles.textsData}>
              height: <Text style={styles.data}>{data.birthDate}</Text>
            </Text>
            <Text style={styles.textsData}>
              weight: <Text style={styles.data}>{data.weight}</Text>
            </Text>
          </View>
          <View style={[styles.viewInfo, { backgroundColor: "#98a7f2" }]}>
            <Text style={styles.textsData}>
              Eye Color: <Text style={styles.data}>{data.eyeColor}</Text>
            </Text>
            <Text style={styles.textsData}>
              User Name: <Text style={styles.data}>{data.username}</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.appState.user,
    deviceDimension: state.appState.deviceDimension,
    width: state.appState.deviceDimension.width,
    height: state.appState.deviceDimension.height,
  };
};

export default connect(mapStateToProps)(Home);
