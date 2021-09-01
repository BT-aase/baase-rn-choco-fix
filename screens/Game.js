import React, { useState } from 'react';
import { Text, Modal, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import Tray from '../components/Tray';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';
import Notepad from '../components/Notepad';

const Game = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [notesVisible, setNotesVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
      >
        <TouchableOpacity onPress={() => setMenuVisible(false)} style={{ flex: 1 }}>
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => console.log('restart')}>
              <View style={styles.menuButtons}>
                <Text style={styles.buttonText}>Restart</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('quit')}>
              <View style={styles.menuButtons}>
                <Text style={styles.buttonText}>Quit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <Notepad visible={notesVisible} onClose={() => setNotesVisible(false)}>
        <Image style={styles.notesImage} source={require('./choc_fix_puz1.png')} />
      </Notepad>
      <Tray />
      <Counter />
      <Buttons openMenu={() => setMenuVisible(true)} openNotes={() => setNotesVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menuContainer: {
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
  menuButtons: {
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
  },
  notesImage: {
    height: 300,
    width: 300
  }
});

export default Game;