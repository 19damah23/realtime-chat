import { actionTypes } from "../constants/actionTypes";

export const get_initial_theme = () => (dispatch) => {
    let current_theme = localStorage.getItem("theme");

    if (!current_theme) current_theme = 'light'

    dispatch({ type: actionTypes.CHANGE_THEME, payload: current_theme });
};

export const change_theme = (newTheme) => (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_THEME, payload: newTheme });
    localStorage.setItem("theme", newTheme);
};
