import * as types from "../Action/actionType";

const initialState = {
  // authActions
  loggedIn: false,
  token: null,
  userId: null,

  // products
  usersList: [],
};

const DataReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loggedIn: action.payload.token && action.payload.userId,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case types.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null,
        userId: null,
      };

    case types.USERS_LIST:
      return {
        ...state,
        usersList: action.payload,
      };
    default:
      return state;
  }
};
export default DataReducers;
