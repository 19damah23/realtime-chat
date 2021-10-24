import { actionTypes } from "../constants/actionTypes";

export const get_initial_theme = () => (dispatch) => {
    const current_theme = localStorage.getItem("theme");
    console.log("theme", current_theme);
    dispatch({ type: actionTypes.CHANGE_THEME, payload: current_theme });
};

export const change_theme = (newTheme) => (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_THEME, payload: newTheme });
    localStorage.setItem("theme", newTheme);
};
