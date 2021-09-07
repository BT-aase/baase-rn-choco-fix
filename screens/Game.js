import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import Tray from '../components/Tray';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';
import Notepad from '../components/Notepad';
import { resetGame } from '../store/actions/game';

const Game = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [notesVisible, setNotesVisible] = useState(false);

  const notes = useSelector((state) => state.game.levelNotes)
  const solved = useSelector((state) => state.game.solved);

  const dispatch = useDispatch();

  const restart = (action) => {
    dispatch(resetGame(action))
    setMenuVisible(false)
  }

  return (
    <View style={styles.container}>
      <Notepad visible={menuVisible} onClose={() => setMenuVisible(false)}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => restart('restart')}>
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
      </Notepad>
      <Notepad visible={notesVisible} onClose={() => setNotesVisible(false)}>
        <Image style={styles.notesImage} source={notes} />
      </Notepad>
      <Notepad visible={solved}>
        <Text style={styles.solutionText}>Order Complete!</Text>
        <Image style={styles.solutionImage} source={require('../puzzles/solutions/puzzle1_solution.png')} />
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
    backgroundColor: '#ebb482',
    height: 175,
    width: 200,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: '25%'
  },
  menuButtons: {
    height: 50,
    width: 200,
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
  },
  solutionText:{
    marginTop: 25,
    marginBottom: 25,
    fontSize: 25,
    textDecorationLine: 'underline'
  },
  solutionImage: {
    height: 250,
    width: 250
  }
});

export default Game;