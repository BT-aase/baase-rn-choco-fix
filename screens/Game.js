import React from 'react';
import { StyleSheet, View } from 'react-native';

import Tray from '../components/Tray';
import Counter from '../components/Counter';

const Game = (props) => {
  return (
    <View style={styles.container}>
        <Tray />
        <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Game;