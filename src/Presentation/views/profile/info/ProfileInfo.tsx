import React, { useEffect } from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import useViewModel from "./ViewModel";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../navigator/StackNavigator";
import styles from "./Styles";
import ProfileItem from "./item";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

export default function ProfileInfoScreen({ navigation }: ProfileScreenProps) {
  const { removeUserSession, user } = useViewModel();

  
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        {user && <ProfileItem user={user} navigation={navigation} />}

       
        
      </ScrollView>
    </GestureHandlerRootView>
  );
}
