import { SET_SELECTED_CANDY } from "../actions/game";

const initialState = {
    selectedCandy: ''
};

const gameReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_SELECTED_CANDY:
            console.log(action);
        default:
            return;
    }
}