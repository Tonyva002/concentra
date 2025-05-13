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
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from "../../../navigator/StackNavigator";
import CustomTextInput from "../../../components/CustomTextInput";
import RoundedButton from "../../../components/RoundedButton";
import { ModalPickImage } from "../../../components/ModalPickImage";
import { MyColors } from "../../../theme/appTheme";


  interface Props extends NativeStackScreenProps<StackParamList, 'ProfileUpdate'>{};


export default function ProfileUpdateScreen({navigation, route}: Props) {
  const {user} = route.params
  const {
    name,
    lastname,
    image,
    phone,
    errorMessage,
    successMesage,
    loading,
    setSuccessMesage,
    setErrorMessage,
    onChange,
    update,
    pickImage,
    takePhoto,
    onChangeInfoUpdate
  } = useViewModel(user);

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
              source={{uri: user?.image}}
            />
           : 
            <Image 
            style={styles.logoImage} 
            source={{ uri: image }} />
          }
        </TouchableOpacity>
        <Text style={styles.logoText}>SELECT AN IMAGE</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formTitle}>ACTUALIZAR</Text>

          <CustomTextInput
            placeholder="Name"
            keyboardtype="default"
            image={require("../../../../../assets/user.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <CustomTextInput
            placeholder="Last Name"
            keyboardtype="default"
            image={require("../../../../../assets/my_user.png")}
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />


          <CustomTextInput
            placeholder="Phone"
            keyboardtype="numeric"
            image={require("../../../../../assets/phone.png")}
            property="phone"
            onChangeText={onChange}
            value={phone}
          />

         

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="CONFIRMAR" onPress={() => update()} />
          </View>
        </ScrollView>
      </View>

      <ModalPickImage
       openGallery={pickImage}
       openCamera={takePhoto}
       modalUseState={modalVisible}
       setModalUseState={setModalVisible}
      
      />

      {
         loading && 
         <ActivityIndicator 
           style={styles.loading} 
           size="large" 
           color={ MyColors.orange }  
         />
      }
    </View>
  );
}
