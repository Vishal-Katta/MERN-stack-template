import * as types from "../Action/actionType";

const initialState = {
  // authActions
  loggedIn: false,
  token: null,
  userId: null,

  // products
  productList: [],
  productList_meta: {},
};

const DataReducers = (state = initialState, action) => {
  // console.log("action", action.type, action.payload);
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loggedIn: action.payload.token && action.payload.userId && true,
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
    case types.PRODUCTS_LIST:
      return {
        ...state,
        productList: action.payload.data,
        productList_meta: action.payload.meta,
      };
    default:
      return state;
  }
};
export default DataReducers;
