import React from 'react';
import { View, StyleSheet } from 'react-native';

const Tray = (props) => {

  const trayItems = [];

  for (let i = 0; i < 3; i++) {
    trayItems.push(
      <View key={`row-${i}`} style={styles.trayRow}>
        <View key={`${i}-1`} style={styles.trayCup}></View>
        <View key={`${i}-2`} style={styles.trayCup}></View>
        <View key={`${i}-3`} style={styles.trayCup}></View>
      </View>
    )
  }

  return (
    <View style={styles.tray}>
      <View style={styles.trayContainer}>
        {trayItems}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tray: {
    height: '50%',
    width: '100%',
    backgroundColor: '#772424'
  },
  trayContainer: {
    marginTop: 30,
    marginLeft: 10
  },
  trayRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  trayCup: {
    width: 95,
    height: 95,
    borderRadius: 50,
    borderColor: '#5F1D1D',
    borderWidth: 5,
    marginLeft: 15,
    backgroundColor: '#471616'
  }
});

export default Tray;