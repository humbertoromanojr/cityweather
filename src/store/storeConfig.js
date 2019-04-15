import { createStore, combineReducers } from "redux";

import cityReducer from "./reducers/cityReducer";

const reducers = combineReducers({
  cityReducer: cityReducer
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
