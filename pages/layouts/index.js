import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Home";
import List from "../List";
import InfoCards from "../InfoCards";

const Stack = createNativeStackNavigator();

const Layouts = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Avengers" component={List} options={{ headerShown: false }} />
        <Stack.Screen name="Heroi" component={InfoCards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layouts;
