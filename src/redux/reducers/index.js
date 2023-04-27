import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articlesReducer from "./articlesReducers";
const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articlesReducer,
});
export default rootReducer;
