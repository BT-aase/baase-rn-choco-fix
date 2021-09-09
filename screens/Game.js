import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import Tray from '../components/Tray';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';
import Notepad from '../components/Notepad';
import details from '../puzzles/details/details';
import notes from '../puzzles/notes/notes';
import solutions from '../puzzles/solutions/solutions';
import { selectLevel, resetGame, quitGame } from '../store/actions/game';

const Game = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [notesVisible, setNotesVisible] = useState(false);

  const levelNotes = useSelector((state) => state.game.levelNotes);
  const solution = useSelector((state) => state.game.levelSolution);
  const solved = useSelector((state) => state.game.solved);
  const selectedLevel = useSelector((state) => state.game.selectedLevel);

  const dispatch = useDispatch();

  useEffect(() => {
    setNotesVisible(true);
    setTimeout(() => setNotesVisible(false), 5000);
  }, [selectedLevel])

  const restart = () => {
    dispatch(resetGame())
    setMenuVisible(false)
  }

  const quit = () => {
    dispatch(quitGame())
    props.navigation.navigate('Start');
  }

  const next = () => {
    dispatch(resetGame())
    dispatch(selectLevel(selectedLevel + 1, details[selectedLevel + 1], notes[selectedLevel + 1], solutions[selectedLevel + 1]));
  }

  return (
    <View style={styles.container}>
      <Notepad visible={menuVisible} onClose={() => setMenuVisible(false)}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => restart()}>
            <View style={styles.menuButtons}>
              <Text style={styles.buttonText}>Restart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => quit()}>
            <View style={styles.menuButtons}>
              <Text style={styles.buttonText}>Quit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Notepad>
      <Notepad visible={notesVisible} display='notes' onClose={() => setNotesVisible(false)}>
        <Image source={levelNotes} />
      </Notepad>
      <Notepad visible={solved} display='solution'>
        <Text style={styles.solutionText}>Order Complete!</Text>
        <Image source={solution} />
        <TouchableOpacity onPress={() => next()}>
          <View style={styles.menuButtons}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => quit()}>
          <View style={styles.menuButtons}>
            <Text style={styles.buttonText}>Quit</Text>
          </View>
        </TouchableOpacity>
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
    marginHorizontal: 10,
    marginTop: 20
  },
  buttonText: {
    color: 'white'
  },
  solutionText: {
    marginTop: 25,
    marginBottom: 25,
    fontSize: 25,
    textDecorationLine: 'underline'
  }
});

export default Game;