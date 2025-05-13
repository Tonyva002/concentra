import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileInfoScreen from "../views/profile/info/ProfileInfo";
import { Image } from "react-native";
import LogoutButton from "../components/LogoutButton";
import { MyColors } from "../theme/appTheme";
import CalendarioScreens from "../views/admin/calendario/Calendario";
import CampoScreen from "../views/admin/campo/Campo";

export type TabParamList = {
  AdminTabsNavigator: undefined;
  Profile: undefined;
  Calendario: undefined;
  Campo: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const iconStyle = { width: 25, height: 25 };
const headerStyle = {
  backgroundColor: MyColors.reddishOrange,
  elevation: 0,
  shadowOpacity: 0,
};

export default function AdminTabsNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen
            name="AdminTabsNavigator"
            component={AdminTabsNavigator}
            options={{
              title: "",
              headerShown: false,
              tabBarLabel: "Inicio",
                tabBarIcon: ({ color }) => (
                  <Image
                    source={require("../../../assets/home.png")}
                    style={{ width: 25, height: 25, tintColor: color }}
                  />
                ),
      
                headerStyle: {
                  backgroundColor: "#005690",
                  elevation: 0,
                  shadowOpacity: 0,
                },
                headerTintColor: "white",
      
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
                    source={require("../../../assets/transaction.png")}
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
                    source={require("../../../assets/add.png")}
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
