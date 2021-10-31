import { actionTypes } from "../constants/actionTypes";

const initialState = {
  profile: {},
  psikolog: [],
  avatar:
    "../../../assets/titikkoma.jpg",
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        profile: action.payload,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.GET_USER:
      return {
        ...state,
        profile: action.payload,
      };
    case actionTypes.GET_PSIKOLOG:
      return {
        ...state,
        psikolog: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
