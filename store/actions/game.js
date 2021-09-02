export const SET_SELECTED_CANDY = 'SET_SELECTED_CANDY';
export const PLACE_CANDY = 'PLACE_CANDY';
export const SET_SOLVED = 'SET_SOLVED';
export const RESET_GAME = 'RESET_GAME';

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