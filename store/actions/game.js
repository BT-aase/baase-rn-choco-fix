export const SET_SELECTED_CANDY = 'SET_SELECTED_CANDY';

export const setSelectedCandy = (id) => {
    return {
      type: SET_SELECTED_CANDY,
      candyId: id,
    };
  };