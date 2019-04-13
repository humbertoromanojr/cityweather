import { createStore, combineReducers } from "redux";

import cityName from "./reducers/city";

const reducers = combineReducers({
  city: cityName
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
