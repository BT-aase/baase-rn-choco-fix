export const SELECT_LEVEL = 'SELECT_LEVEL';
export const SET_SELECTED_CANDY = 'SET_SELECTED_CANDY';
export const PLACE_CANDY = 'PLACE_CANDY';
export const SET_SOLVED = 'SET_SOLVED';
export const RESET_GAME = 'RESET_GAME';
export const QUIT_GAME = 'QUIT_GAME';


export const selectLevel = (level, details, notes, solution) => {
  return {
    type: SELECT_LEVEL,
    selectedLevel: level,
    levelDetails: details,
    levelNotes: notes,
    levelSolution: solution
  }
}

export const setSelectedCandy = (id) => {
  return {
    type: SET_SELECTED_CANDY,
    candyId: id,
  };
};

export const placeCandy = (spot) => {
  return {
    type: PLACE_CANDY,
    traySpot: spot
  };
};

export const setSolved = () => {
  return {
    type: SET_SOLVED
  }
}

export const resetGame = (state) => {
  return {
    type: RESET_GAME,
    resetState: state
  }
}

export const quitGame = (state)  => {
  return {
    type : QUIT_GAME
  }
}
