import React, { useState } from 'react';
import { Text, Modal, StyleSheet, View } from 'react-native';

import Tray from '../components/Tray';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';

const Game = (props) => {

  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    console.log('text');
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
      >
        <Text>Menu</Text>
      </Modal>
      <Tray />
      <Counter />
      <Buttons openMenu={() => openMenu()} menu={menuVisible}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Game;