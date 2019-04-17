import { createStore, combineReducers } from "redux";

import cityReducer from "./reducers/cityReducer";
import UfReducer from "./reducers/UfReducer";

const reducers = combineReducers({
  cityReducer: cityReducer,
  UfReducer: UfReducer
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
