import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Feather name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
