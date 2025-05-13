import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../navigator/StackNavigator";

import { User } from "../../../../Domain/entities/User";
import { MyColors } from "../../../theme/appTheme";


interface Props {
   user: User;
   navigation: NativeStackNavigationProp<StackParamList>;
  
}

export default function ProfileItem({ user, navigation }: Props) {

  console.log("Jugadores list:", user);

 
  
  return (
    <View>
      <View style={styles.divider}></View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer}>
           { user?.image == "" ?
            <Image
            source={require("../../../../../assets/user_image.png")}
            style={styles.image}
          /> :
          
            user?.image !== ""
            &&
            <Image 
          source={{uri: user?.image}}
          style={styles.image} />
          
        }
         
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('ProfileUpdate', {user: user!})}
        style={styles.textContainer}>
          <Text style={styles.textTitle}>{user?.name} { user?.lastname} </Text>
          <Text style={styles.textDescription}>{user?.phone}</Text>
          <Text style={styles.textDescription}>{user?.email}</Text>

          <View style={styles.actionImageContainer}>
            <Image
              style={styles.actionImage}
              source={require("../../../../../assets/chevron.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    paddingVertical: 16,
    paddingStart: 16,
    paddingRight: 4,
    backgroundColor: MyColors.blue,
  },

  imageContainer: {
    justifyContent: "center",
    
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    
  },

  textContainer: {
    flex: 1,
    width: "100%",
    paddingLeft: 5,
    marginLeft: 10,
    justifyContent: "center",
  },

  textTitle: {
    color: "white",
    fontSize: 16,
  },

  textDescription: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },

  actionImage: {
    width: 40,
    height: 40,
    tintColor: MyColors.white,
  },

  actionImageContainer: {
    position: "absolute",
    right: 0,
  },

  divider: {
    height: 1,
    backgroundColor: MyColors.gris_muy_oscuro,
    flex: 1,
  },
});
