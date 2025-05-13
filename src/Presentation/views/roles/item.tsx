import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Rol } from "../../../Domain/entities/Rol";
import { MyColors } from "../../theme/appTheme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigator/StackNavigator";

interface Props {
  rol: Rol;
  height: number;
  width: number;
  navigation: NativeStackNavigationProp<StackParamList, "Roles">;
}

export default function RolesItem({ rol, height, width, navigation }: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (rol.name == "ADMINISTRATOR") {
          navigation.replace("AdminTabsNavigator");
        } else if (rol.name == "CUSTOMER") {
          navigation.replace("ClientTabsNavigator");
        }
      }}
      style={{ ...styles.container, height, width }}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: rol.image }} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{rol.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: "center",
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 18,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },

  titleContainer: {
    height: 50,
    backgroundColor: MyColors.orange,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "white",
  },
});
