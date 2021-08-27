import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import TrayCup from './TrayCup';
import Candy from './Candy';
import { placeCandy } from '../store/actions/game';


const Tray = (props) => {

  const dispatch = useDispatch();

  const candyPlace = (spot, traySpot) => {
    if (traySpot === '') {
      dispatch(placeCandy(spot));
    }
  }

  const trayItems = [];

  const trayCandy = useSelector((state) => state.game.trayCandy);

  for (let i = 0; i < 3; i++) {

    let spotOne = trayCandy[i][0];
    let spotTwo = trayCandy[i][1];
    let spotThree = trayCandy[i][2];

    trayItems.push(
      <View key={`row-${i}`} style={styles.trayRow}>
        {spotOne === '' ?
          <TrayCup key={`${i}-0`} onPress={() => candyPlace(`${i}-0`, spotOne)} style={styles.trayCup}></TrayCup> :
          <Candy key={spotOne} id={spotOne} />
        }
        {spotTwo === '' ?
          <TrayCup key={`${i}-1`} onPress={() => candyPlace(`${i}-1`, spotTwo)} style={styles.trayCup}></TrayCup> :
          <Candy key={spotTwo} id={spotTwo} />
        }
        {spotThree === '' ?
          <TrayCup key={`${i}-2`} onPress={() => candyPlace(`${i}-2`, spotThree)} style={styles.trayCup}></TrayCup> :
          <Candy key={spotThree} id={spotThree} />
        }
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
  }
});

export default Tray;