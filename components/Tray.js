import React from 'react';
import { View, StyleSheet } from 'react-native';

const Tray = (props) => {
    return (
        <View style={styles.tray}>
        <View style={styles.trayContainer}>
          <View style={styles.trayRow}>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
          </View>
          <View style={styles.trayRow}>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
          </View>
          <View style={styles.trayRow}>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
          </View>
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