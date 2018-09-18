import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import artistReducer from "./artistReducer";
import albumReducer from "./albumReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  tokenReducer,
  artistReducer,
  albumReducer,
  uiReducer
});
