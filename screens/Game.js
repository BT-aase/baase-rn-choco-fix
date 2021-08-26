import React from 'react';
import { StyleSheet, View } from 'react-native';

import Tray from '../components/Tray';
import Paper from '../components/Paper';

const Game = (props) => {
  return (
    <View style={styles.container}>
        <Tray />
        <Paper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Game;