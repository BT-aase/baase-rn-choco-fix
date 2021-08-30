import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import Candy from './Candy';
import { setSelectedCandy } from '../store/actions/game';

const Counter = (props) => {
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

  const counterItems = [];

  const counterCandy = useSelector((state) => state.game.counterCandy);

  for (let i = 0; i < 3; i++) {
    let flavors = ['chocolate', 'strawberry', 'caramel'];
    let triangle = counterCandy[i][0];
    let circle = counterCandy[i][1];
    let square = counterCandy[i][2];

    counterItems.push(
      <View key={flavors[i] + '-row'} style={styles.counterRow}>
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
    <View style={styles.counter}>
      <View style={styles.counterContainer}>
        {counterItems}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  counter: {
    height: '50%',
    width: '100%',
    backgroundColor: '#d3d3d3'
  },
  counterContainer: {
    marginTop: 15,
    marginLeft: 15
  },
  counterRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  empty: {
    width: 100,
    height: 100,
    marginHorizontal: 6
  }
});

export default Counter;