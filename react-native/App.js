import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/appTitle";
import Signup, { StudentSignup } from "./components/signUp";
import Login from "./components/login";
import CreateAccount from "./components/createAccount";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Sign Up"
          component={Signup}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Student Sign Up"
          component={StudentSignup}
          options={{ title: "Student Sign Up" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Create Account"
          component={CreateAccount}
          options={{ title: "Create Account" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
