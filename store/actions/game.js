export const SET_SELECTED_CANDY = 'SET_SELECTED_CANDY';
export const PLACE_CANDY= 'PLACE_CANDY';

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