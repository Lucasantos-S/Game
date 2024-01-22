import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
export function Game() {
  const [refreshing, setRefreshing] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game</Text>
    </View>
  );
}
