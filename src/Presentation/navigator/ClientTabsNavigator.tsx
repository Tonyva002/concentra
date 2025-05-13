import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileInfoScreen from "../views/profile/info/ProfileInfo";
import CalendarioScreens from "../views/client/calendario/Calendario";
import CampoScreen from "../views/client/campo/Campo";
import ClientPlayerNavigator from "./ClientPlayerNavigator";
import LogoutButton from "../components/LogoutButton";
import { Image } from "react-native";
import { MyColors } from "../theme/appTheme";

export type TabParamList = {
  AdminTabsNavigator: undefined;
  Profile: undefined;
  Calendario: undefined;
  Campo: undefined;
};


const Tab = createBottomTabNavigator();

const iconStyle = { width: 25, height: 25 };
const headerStyle = {
  backgroundColor: MyColors.reddishOrange,
  elevation: 0,
  shadowOpacity: 0,
};

export default function ClientTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerTintColor: "white" }}>
      <Tab.Screen
        name="ClientPlayerNavigator"
        component={ClientPlayerNavigator}
        options={{
          title: "",
          headerShown: false,
          tabBarLabel: "Jugadores",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/home.png")}
              style={[iconStyle, { tintColor: color }]}
            />
          ),
          tabBarActiveTintColor: MyColors.reddishOrange,
        }}
      />
      <Tab.Screen
        name="Calendario"
        component={CalendarioScreens}
        options={{
          title: "Calendario",
          headerTitleAlign: 'center',
          tabBarLabel: "Calendario",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/calendar.png")}
              style={[iconStyle, { tintColor: color }]}
            />
          ),
          tabBarActiveTintColor: MyColors.reddishOrange,
          headerStyle,
        }}
      />
      <Tab.Screen
        name="Campo"
        component={CampoScreen}
        options={{
          title: "Campo",
          headerTitleAlign: 'center',
          tabBarLabel: "Campo",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/golf.png")}
              style={[iconStyle, { tintColor: color }]}
            />
          ),
          tabBarActiveTintColor: MyColors.reddishOrange,
          headerStyle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileInfoScreen}
        options={{
          title: "Profile",
          headerTitleAlign: 'center',
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/account.png")}
              style={[iconStyle, { tintColor: color }]}
            />
          ),
          headerRight: () => <LogoutButton />,
          tabBarActiveTintColor: MyColors.reddishOrange,
          headerStyle,
        }}
      />
    </Tab.Navigator>
  );
}
