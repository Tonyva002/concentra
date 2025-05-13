import {
  View,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import useViewModel from "./ViewModel";
import styles from "./Styles";
import {NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomTextInput from "../../../components/CustomTextInput";
import RoundedButton from "../../../components/RoundedButton";
import { PlayerStackParamList } from "../../../navigator/ClientPlayerNavigator";
import { MyColors } from "../../../theme/appTheme";
import CustomTextInput2 from "../../../components/CustomTextInput2";


  interface Props extends NativeStackScreenProps<PlayerStackParamList, 'PlayerDetails'>{};


export default function PlayerDetailsScreen({navigation, route}: Props) {
  const {player} = route.params
  const {
    name,
    image,
    handicap,
    description,
    patrocinador,
    errorMessage,
    successMesage,
    loading,
    setSuccessMesage,
    setErrorMessage,
    onChange,

  } = useViewModel(player);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      setErrorMessage("");
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMesage !== "") {
      ToastAndroid.show(successMesage, ToastAndroid.LONG);
      setSuccessMesage("");
    }
  }, [successMesage]);

   


  return (
    <View style={styles.container}>
   
      <View style={styles.imageBackground}></View>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {
          image == "" ? 
            <Image
              style={styles.logoImage}
              source={{uri: player?.image}}
            />
           : 
            <Image 
            style={styles.logoImage} 
            source={{ uri: image }} />
          }
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formTitle}>ACTUALIZAR</Text>

          <CustomTextInput2
            placeholder="Name"
            keyboardtype="default"
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <CustomTextInput2
            placeholder="Handicap"
            keyboardtype="default"
            property="handicap"
            onChangeText={onChange}
            value={handicap}
          />


          <CustomTextInput2
            placeholder="Sponsor"
            keyboardtype="default"
            property="sponsor"
            onChangeText={onChange}
            value={patrocinador}
          />

         <Text>{description}</Text>

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="CONFIRMAR" onPress={() => {}} />
          </View>
        </ScrollView>
      </View>

     

      {
         loading && 
         <ActivityIndicator 
           style={styles.loading} 
           size="large" 
           color={ MyColors.reddishOrange}  
         />
      }
    </View>
  );
}
