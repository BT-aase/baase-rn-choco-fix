import { PLACE_CANDY, QUIT_GAME, RESET_GAME, SELECT_LEVEL, SET_SELECTED_CANDY, SET_SOLVED } from "../actions/game";

const initialState = {
    selectedLevel: 0,
    levelNotes: '',
    levelSolution: '',
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
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
    solved: false
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_LEVEL: {
            return {
                ...state,
                selectedLevel: action.selectedLevel,
                levelNotes: action.levelNotes,
                levelSolution: action.levelSolution,
                solutionCandy: action.levelDetails
            }
        }
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
        case QUIT_GAME:
            return {
                ...state,
                levelNotes: '',
                levelSolution: '',
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
