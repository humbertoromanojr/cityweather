import { SELECT_CITY } from "./actionTypes";

export const cityName = city => {
  return {
    type: SELECT_CITY,
    payload: city
  };
};
