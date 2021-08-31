import React, { useState } from 'react';
import { Text, Modal, StyleSheet, View, TouchableOpacity } from 'react-native';

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
          <TouchableOpacity onPress={() => setMenuVisible(false)}>
            <View style={styles.modal}>
              <TouchableOpacity onPress={() => console.log('restart')}>
                <View style={styles.menu}>
                  <Text style={styles.buttonText}>Restart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('quit')}>
                <View style={styles.menu}>
                  <Text style={styles.buttonText}>Quit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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
    height: 200,
    width: 200,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: '25%',
    marginTop: '60%',
    borderRadius: 10,
    elevation: 5
  },
  menu: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#772424',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 10
  },
  buttonText: {
    color: 'white'
  }
});

export default Game;