import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const [refreshing, setRefreshing] = React.useState(false);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('Game');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity style={styles.button} onPress={handleNewGroup}>
        <Text style={styles.buttontitle}>Game</Text>
      </TouchableOpacity>
    </View>
  );
}
