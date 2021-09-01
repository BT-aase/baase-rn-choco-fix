import { PLACE_CANDY, SET_SELECTED_CANDY } from "../actions/game";

const initialState = {
    selectedCandy: '',
    counterCandy:
        [
            ['chocolate-triangle', 'chocolate-circle', 'chocolate-square'],
            ['strawberry-triangle', 'strawberry-circle', 'strawberry-square'],
            ['caramel-triangle', 'caramel-circle', 'caramel-square'],
        ],
    trayCandy:
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
};

const gameReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SET_SELECTED_CANDY:
            return { ...state, selectedCandy: action.candyId }
        case PLACE_CANDY:
            for (let i = 0; i < 3; i++) {
                let counterRow = state.counterCandy[i];
                let filter = counterRow.indexOf(state.selectedCandy);

                if (filter !== -1) {
                    let updatedCounterCandy = [...state.counterCandy];
                    let updatedTrayCandy = [...state.trayCandy];

                    let row = action.traySpot.split('-')[0];
                    let col = action.traySpot.split('-')[1];

                    updatedCounterCandy[i][filter] = '';
                    updatedTrayCandy[row][col] = state.selectedCandy;
                    return { ...state, counterCandy: updatedCounterCandy, trayCandy: updatedTrayCandy, selectedCandy: '' }
                }
            }
        default:
            return state;
    }
};

export default gameReducer;
