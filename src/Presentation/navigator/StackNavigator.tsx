import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../views/login/Login";
import RegisterScreen from "../views/register/Register";
import RolesScreen from "../views/roles/Roles";
import AdminTabsNavigator from "./AdminTabsNavigator";
import ClientTabsNavigator from "./ClientTabsNavigator";
import ProfileUpdateScreen from "../views/profile/update/ProfileUpdate";
import { User } from "../../Domain/entities/User";
import { UserProvider } from "../context/UserContex";


export type StackParamList = {
  Login: undefined;
  Register: undefined;
  Roles: undefined;
  AdminTabsNavigator: undefined;
  ClientTabsNavigator: undefined;
  ProfileUpdate: { user: User };
};

const Stack = createNativeStackNavigator<StackParamList>();

const UserState = ({ children }: any) => {
  return(
    <UserProvider>{children}</UserProvider>
  )
};

export default function StackNavigator() {
  return (
    <UserState>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
    
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "" }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "" }}
      />

      <Stack.Screen
        name="Roles"
        component={RolesScreen}
        options={{ title: "Selecciona un rol" }}
      />

      <Stack.Screen
        name="AdminTabsNavigator"
        component={AdminTabsNavigator}
        options={{ title: "" }}
      />

      <Stack.Screen
        name="ClientTabsNavigator"
        component={ClientTabsNavigator}
        options={{
          title: "",
        }}
      />

      <Stack.Screen
        name="ProfileUpdate"
        component={ProfileUpdateScreen}
        options={{
          title: "Actualizar usuario",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#005690",
          },
          headerTintColor: "white",
        }}
      />

    </Stack.Navigator>
    </UserState>
  );
}

