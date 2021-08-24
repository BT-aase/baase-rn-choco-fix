import React from 'react';
import { StyleSheet, View } from 'react-native';

import Candy from './components/Candy';

export default function App() {
  return (
    <View style={styles.container}>
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
      <View style={styles.paper}>
        <View style={styles.paperContainer}>
          <View style={styles.paperRow}>
            <View style={styles.candyContainer}>
              <Candy flavor='chocolate' shape='triangle' />
            </View>
            <View style={styles.candyContainer}>
              <Candy flavor='chocolate' shape='circle' />
            </View>
            <View style={styles.candyContainer}>
              <Candy flavor='chocolate' shape='square' />
            </View>
          </View>
          <View style={styles.paperRow}>
            <View style={styles.candyContainer}>
              <Candy flavor='strawberry' shape='triangle' />
            </View>
            <View style={styles.candyContainer}>
              <Candy flavor='strawberry' shape='circle' />
            </View>
            <View style={styles.candyContainer}>
              <Candy flavor='strawberry' shape='square' />
            </View>
          </View>
          <View style={styles.paperRow}>
          <View style={styles.candyContainer}>
              <Candy flavor='caramel' shape='triangle' />
            </View>
            <View style={styles.candyContainer}>
              <Candy flavor='caramel' shape='circle' />
            </View>
            <View>
              <Candy flavor='caramel' shape='square' />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  },
  paper: {
    height: '50%',
    width: '100%',
    backgroundColor: '#d3d3d3'
  },
  paperContainer: {
    marginTop: 30,
    marginLeft: 10
  },
  paperRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  candyContainer: {
    marginLeft: 10
  }
});
