import React, { useState, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "../src/components/context";
import Home from "../src/screen/Home";
import Staff from "../src/screen/Staff";
import Continents from "../src/screen/Continents";
import Login from "../src/screen/Login";
import Logout from "../src/screen/Logout";
import Slash from "../src/screen/Slash";
import reducer from "../src/components/redux/reducer";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStore } from "redux";

const store = createStore(reducer);

const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
    </AuthStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition={"left"}
      statusBarAnimation={"slide"}
    >
      <Drawer.Screen name="ZAMARA APP" component={Home} />
      <Drawer.Screen name="Staff" component={Staff} />
      <Drawer.Screen name="Continents" component={Continents} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator>
    {userToken ? (
      <RootStack.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{ headerShown: false }}
      />
    ) : (
      <RootStack.Screen
        name="AuthStackScreen"
        component={AuthStackScreen}
        options={{ headerShown: false }}
      />
    )}
  </RootStack.Navigator>
);

function Main(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("hsvkjs");

  const authContext = useMemo(() => {
    return {
      login: () => {
        setIsLoading(false);
        setUserToken("hsvkjs");
      },
      logout: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    console.log("prop", props);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Slash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.appState.user,
    width: state.appState.deviceDimension.width,
    height: state.appState.deviceDimension.height,
  };
};

export default connect(mapStateToProps)(Main);
