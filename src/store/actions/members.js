import axios from "axios";

export const GET_MEMBERS = "GET_MEMBERS";

const BASE_URL = "https://reqres.in/api/users?page=2";

const getMembers = (members) => {
  return {
    type: GET_MEMBERS,
    payload: members,
  };
};

export const getAllMembers = (members) => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}`);
  //console.log("action", response);
  members = response.data;
  dispatch(getMembers(members));
};
