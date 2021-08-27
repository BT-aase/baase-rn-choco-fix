import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import Candy from './Candy';
import { setSelectedCandy } from '../store/actions/game';

const Paper = (props) => {
  const [selected, setSelected] = useState('');

  const dispatch = useDispatch();

  const select = (id) => {
    let selectId = (id === selected) ? '' : id;
    setSelected(selectId);
    dispatchSelect(selectId);
  }

  const dispatchSelect = (selected) => {
    dispatch(setSelectedCandy(selected));
  }

  const paperItems = [];

  const paperCandy = useSelector((state) => state.game.paperCandy);

  for (let i = 0; i < 3; i++) {
    let flavors = ['chocolate', 'strawberry', 'caramel'];
    let triangle = paperCandy[i][0];
    let circle = paperCandy[i][1];
    let square = paperCandy[i][2];

    paperItems.push(
      <View key={flavors[i] + '-row'} style={styles.paperRow}>
        {triangle !== '' ?
          <Candy
            key={triangle}
            id={triangle}
            onPress={() => select(triangle)}
            showBorder={selected === triangle}
          /> :
          <View style={styles.empty} />
        }
        {circle !== '' ?
          <Candy
            key={circle}
            id={circle}
            onPress={() => select(circle)}
            showBorder={selected === circle}
          /> :
          <View style={styles.empty} />
        }
        {square !== '' ?
          <Candy
            key={square}
            id={square}
            onPress={() => select(square)}
            showBorder={selected === square}
          /> :
          <View style={styles.empty} />
        }
      </View>
    )
  }

  return (
    <View style={styles.paper}>
      <View style={styles.paperContainer}>
        {paperItems}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  paper: {
    height: '50%',
    width: '100%',
    backgroundColor: '#d3d3d3'
  },
  paperContainer: {
    marginTop: 15,
    marginLeft: 15
  },
  paperRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  empty: {
    width: 100,
    height: 100,
    marginHorizontal: 6
  }
});

export default Paper;