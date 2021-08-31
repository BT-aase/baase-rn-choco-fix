import React, { useState } from 'react';
import { Text, Modal, StyleSheet, View } from 'react-native';

import Tray from '../components/Tray';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';

const Game = (props) => {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={menuVisible}
        >
          <View style={styles.modal}>
            <Text>Menu</Text>
          </View>
        </Modal>
      </View>
      <Tray />
      <Counter />
      <Buttons openMenu={() => setMenuVisible(true)} menu={menuVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modal: {
    backgroundColor: 'white',
    height: 300,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: '25%',
    marginTop: '50%',
    elevation: 5
  }
});

export default Game;