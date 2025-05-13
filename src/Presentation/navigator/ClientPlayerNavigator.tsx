import { View, Text, Image } from "react-native";
import React from "react";
import { PlayerProvider } from "../context/PlayerContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlayersScreen from "../views/client/players/Players";
import { Player } from "../../Domain/entities/Player";
import { MyColors } from "../theme/appTheme";
import PlayerDetailsScreen from "../views/client/PlayerDetails/PlayerDetails";


export type PlayerStackParamList = {

  Players: undefined;
  PlayerDetails: {player: Player};

};

const Stack = createNativeStackNavigator<PlayerStackParamList>();

const PlayerState = ({ children }: any) => {
  return <PlayerProvider>{children}</PlayerProvider>;
};

export default function ClientPlayerNavigator() {
  return (
    <PlayerState>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="Players"
          component={PlayersScreen}
          options={{
            title: "Jugadores",
            headerStyle: {
              backgroundColor: MyColors.reddishOrange,
            },
            headerTintColor: "white",
            headerTitleAlign: 'center',
            
          }}
        />


         <Stack.Screen
          name="PlayerDetails"
          component={PlayerDetailsScreen}
          options={{
            title: "Detalles del Jugador",
            headerStyle: {
              backgroundColor: MyColors.reddishOrange,
            },
            headerTintColor: "white",
          }}
        />

      </Stack.Navigator>
    </PlayerState>
  );
}
