import { combineReducers } from "redux";
import membersReducer from "./members";

const reducers = combineReducers({
  membersState: membersReducer,
});
export default reducers;
