import React, { useState, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "./src/components/context";
import HomeScreen from "./src/screen/Home";
import Staff from "./src/screen/Staff";
import Continents from "./src/screen/Continents";
import Login from "./src/screen/Login";
import Logout from "./src/screen/Logout";
import Slash from "./src/screen/Slash";

const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("dfgas");

  const authContext = useMemo(() => {
    return {
      login: () => {
        setIsLoading(false);
        setUserToken("sfsdd");
      },
      logout: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
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
        {userToken ? (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerPosition={"left"}
            statusBarAnimation={"slide"}
          >
            <Drawer.Screen name="ZAMARA APP" component={HomeScreen} />
            <Drawer.Screen name="Staff" component={Staff} />
            <Drawer.Screen name="Continents" component={Continents} />
            <Drawer.Screen name="Logout" component={Logout} />
          </Drawer.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="Login"
              options={{ headerMode: "none", headerShown: false }}
              component={Login}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
