import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerStack from "./Drawer";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
        <Stack.Screen name="Login" component={AuthStack} />
        <Stack.Screen name="Dashboard" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoute;
