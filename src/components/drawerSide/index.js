import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screen/Home";
import Staff from "../../screen/Staff";
import Continents from "../../screen/Continents";
import Logout from "../../screen/Logout";
const Drawer = createDrawerNavigator();

const DrawerSide = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Staff" component={Staff} />
        <Drawer.Screen name="Continents" component={Continents} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerSide;
