import { PLACE_CANDY, SET_SELECTED_CANDY } from "../actions/game";

const initialState = {
    selectedCandy: '',
    paperCandies:
        [
            ['chocolate-triangle', 'chocolate-circle', 'chocolate-square'],
            ['strawberry-triangle', 'strawberry-circle', 'strawberry-square'],
            ['caramel-triangle', 'caramel-circle', 'caramel-square'],
        ],
    trayCandies:
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]
};

const gameReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SET_SELECTED_CANDY:
            return { ...state, selectedCandy: action.candyId }
        case PLACE_CANDY:
            for (let i = 0; i < 3; i++) {
                let paperRow = state.paperCandies[i];
                let filter = paperRow.indexOf(state.selectedCandy);

                if (filter !== -1) {
                    let updatedPaperCandies = [...state.paperCandies];
                    let updatedTrayCandies = [...state.trayCandies];

                    let row = action.traySpot.split('-')[0];
                    let col = action.traySpot.split('-')[1];

                    updatedPaperCandies[i][filter] = '';
                    updatedTrayCandies[row][col] = state.selectedCandy;
                    return { ...state, paperCandies: updatedPaperCandies, trayCandies: updatedTrayCandies, selectedCandy: '' }
                }
            }
        default:
            return state;
    }
};

export default gameReducer;
