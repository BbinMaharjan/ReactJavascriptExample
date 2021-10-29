import { GET_MEMBERS } from "../actions/members";

const initialState = {
  members: [],
};
const membersReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload.data,
      };
    default:
      return state;
  }
};

export default membersReducer;
