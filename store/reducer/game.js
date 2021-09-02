import { PLACE_CANDY, RESET_GAME, SET_SELECTED_CANDY, SET_SOLVED } from "../actions/game";

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
        ],
    solutionCandy:
        [
            ['strawberry-circle', 'strawberry-triangle', 'strawberry-square'],
            ['chocolate-circle', 'chocolate-triangle', 'chocolate-square'],
            ['caramel-circle', 'caramel-triangle', 'caramel-square'],
        ],
    solved: false
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CANDY:
            return { ...state, selectedCandy: action.candyId }
        case PLACE_CANDY:
            for (let i = 0; i < 3; i++) {
                let counterRow = state.counterCandy[i];
                let filter = counterRow.indexOf(state.selectedCandy);

                if (filter !== -1) {
                    let updatedCounterCandy = { ...state.counterCandy };
                    let updatedTrayCandy = { ...state.trayCandy };

                    let row = action.traySpot.split('-')[0];
                    let col = action.traySpot.split('-')[1];

                    updatedCounterCandy[i][filter] = '';
                    updatedTrayCandy[row][col] = state.selectedCandy;
                    return { ...state, counterCandy: updatedCounterCandy, trayCandy: updatedTrayCandy, selectedCandy: '' }
                }
            }
        case SET_SOLVED:
            return { ...state, solved: true }
        case RESET_GAME:
            return {
                ...state,
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
                    ],
                solved: false
            }
        default:
            return state;
    }
};

export default gameReducer;
