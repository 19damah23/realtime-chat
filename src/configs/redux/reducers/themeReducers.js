import { actionTypes } from "../constants/actionTypes";

const initialState = {
    theme: "dark",
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
};

export default themeReducer;
