import * as types from "./actionType";
import axios from "axios";
import GLOBAL_CONSTANTS from "../../GlobalConstants";

// ?get-----------------------------------------------------------
const getusersListData = (data) => ({
  type: types.USERS_LIST,
  payload: data,
});

export const loadusersListData = (callback = () => {}) => {
  return function (dispatch) {
    axios
      .get(`${GLOBAL_CONSTANTS.backend_host}api/v1/users/list`)
      .then((resp) => {
        callback(resp.data);
        dispatch(getusersListData(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
