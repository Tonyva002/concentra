import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import useViewModel from './ViewModel'
import PlayerItem from './item';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PlayerStackParamList } from '../../../navigator/ClientPlayerNavigator';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<PlayerStackParamList, 'Players'>;
};

export default function PlayersScreen({navigation}: HomeScreenProps) {

  const {players} = useViewModel();

  useEffect(() => {
    
  }, [players])

  return (
    <View style={styles.container}>
      <FlatList 
         data={players}
         keyExtractor={(item) => item.id}
         renderItem={({item}) => <PlayerItem player={item} navigation={navigation}/>}

      />
    </View>
  )
}