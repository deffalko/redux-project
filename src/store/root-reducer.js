import { combineReducers } from "redux";

import { positionReducer } from "./positions/positions-reducer";

export const rootReducer = combineReducers({
  positions: positionReducer,
});
