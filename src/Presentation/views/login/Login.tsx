import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import Reac, {useEffect} from "react";
import styles from "./Styles";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import useViewModel from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import RoundedButton from "../../components/RoundedButton";
import { StackParamList } from "../../navigator/StackNavigator";


type LoginScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {

  const { email, password, errorMessage, user,  setErrorMessage, onChange, login } = useViewModel();

  useEffect(() => {
    if(errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      setErrorMessage("");
    }
  }, [errorMessage])


  useEffect(() => {
    if(user?.id !== null && user?.id !== undefined && user?.id !== ""){

      console.log("Id de usuario: " ,  user?.id)

      if(user.roles?.length! > 1){
        navigation.replace('Roles');
      }else{
        navigation.replace('ClientTabsNavigator');

      }
      
    }
  }, [user])
  

  return (
    <View style={styles.container}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CONCENTRA</Text>
       
      
      </View>

      <View style={styles.loginForm}>
        <Text style={styles.loginTitle}>LOGIN</Text>

        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Email"
          value={email}
          keyboardtype="email-address"
          property="email"
          onChangeText={onChange}
        />

        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Password"
          value={password}
          keyboardtype="default"
          property="password"
          onChangeText={onChange}
        />

        <View style={{ marginTop: 40 }}>
          <RoundedButton
            text="LOGIN"
            onPress={() => login()}
          />
        </View>

        <View style={styles.loginRegister}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.loginTextRegister}>Register</Text>
          </TouchableOpacity>
    
        </View>

        <Text style={styles.loginTerminos}>Terminos y condiciones</Text>
      
      </View>
    </View>
  );
}
