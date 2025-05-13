import React, { useContext } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackParamList } from '../navigator/StackNavigator'; 
import { UserContext } from '../context/UserContex';

export default function LogoutButton() {
 
  const {removeUserSession } = useContext(UserContext);


  const navigation = useNavigation<NavigationProp<StackParamList>>();


  const handleLogout = async () => {
  await removeUserSession();
  navigation.reset({
    index: 0,
    routes: [{ name: 'Login' }],
  });
};



  return (
    <TouchableOpacity onPress={handleLogout}>
      <Image
        source={require('../../../assets/sesión.png')}
        style={{
          width: 26,
          height: 26,
          marginRight: 15,
          tintColor: 'white',
        }}
      />
    </TouchableOpacity>
  );
}


