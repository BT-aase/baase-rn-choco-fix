import { SET_SELECTED_CANDY } from "../actions/game";

const initialState = {
    selectedCandy: '',
    paperCandies:
        [
            ['chocolate-triangle', 'chocolate-circle', 'chocolate-square'],
            ['strawberry-triangle', 'strawberry-circle', 'strawberry-square'],
            ['caramel-triangle', 'caramel-circle', 'caramel-square'],
        ]
};

const gameReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case SET_SELECTED_CANDY:
            for (let i = 0; i < 3; i++) {
                let paperRow = state.paperCandies[i];
                let filter = paperRow.indexOf(action.candyId);
                if (filter !== -1) {
                    let updatedPaperCandies = [...state.paperCandies];
                    updatedPaperCandies[i][filter] = '';
                    console.log(updatedPaperCandies)
                }
             }
            return { ...state, selectedCandy: action.candyId }
        default:
            return state;
    }
};

export default gameReducer;
