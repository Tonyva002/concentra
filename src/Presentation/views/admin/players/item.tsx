import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { MyColors } from "../../../theme/appTheme";
import { Player } from "../../../../Domain/entities/Player";
import { PlayerStackParamList } from "../../../navigator/ClientPlayerNavigator";

interface Props {
  player: Player;
  navigation: NativeStackNavigationProp<PlayerStackParamList, "Players">;
}

export default function PlayerItem({ player, navigation }: Props) {
  return (
    <View>
      <View style={styles.divider}></View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PlayerDetails", { player: player ?? undefined })
        }
      >
        <View style={styles.container}>
          {player?.image == "" ? (
            <Image
              source={require("../../../../../assets/user_image.png")}
              style={styles.image}
            />
          ) : (
            player.image !== "" && (
              <Image source={{ uri: player?.image }} style={styles.image} />
            )
          )}

          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>{player.name}</Text>

            <View style={styles.textHcpContainer}>
              <Text style={styles.textHcp}>{player.handicap}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.divider}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 84,
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  textContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 5,
    marginLeft: 10,
    justifyContent: "center",
  },

  textTitle: {
    color: MyColors.blue,
    fontSize: 16,
  },

  textHcp: {
    alignSelf: "center",
    justifyContent: "center",
    color: MyColors.white,
  },

  textHcpContainer: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    right: 5,
    backgroundColor: MyColors.blue,
  },

  divider: {
    height: 1,
    backgroundColor: MyColors.gris_muy_claro,
    flex: 1,
  },
});
