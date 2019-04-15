import { SELECT_CITY } from "./actionTypes";

export const selectCity = itemValue => {
  return {
    type: SELECT_CITY,
    payload: itemValue
  };
};
