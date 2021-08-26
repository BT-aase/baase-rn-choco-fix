import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Candy from './Candy';

const Paper = (props) => {
  const [selected, setSelected] = useState('');

  const flavors = ['chocolate', 'strawberry', 'caramel'];

  const select = (id) => {
    if (id === selected){
      setSelected('');
    } else  {
      setSelected(id);
    };
  }

  const view = [];

  for (let i = 0; i < 3; i++) {

    let triangle = flavors[i] + '-triangle';
    let circle = flavors[i] + '-circle';
    let square = flavors[i] + '-square';

    view.push(
      <View key={flavors[i] + '-row'} style={styles.paperRow}>
        <Candy
          key={triangle}
          id={triangle}
          onPress={() => select(triangle)}
          showBorder={selected === triangle}
        />
        <Candy
          key={circle}
          id={circle}
          onPress={() => select(circle)}
          showBorder={selected === circle}
        />
        <Candy
          key={square}
          id={square}
          onPress={() => select(square)}
          showBorder={selected === square}
        />
      </View>
    )
  }

  return (
    <View style={styles.paper}>
      <View style={styles.paperContainer}>
        {view}
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
  }
});

export default Paper;