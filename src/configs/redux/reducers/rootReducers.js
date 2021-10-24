import { combineReducers } from "redux";
import themeReducer from "./themeReducers";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
    user: userReducers,
    theme: themeReducer,
});

export default rootReducer;
