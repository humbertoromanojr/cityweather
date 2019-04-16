import { ACTION_SELECT_CITY } from "./actionTypes";

export const actionSelectCity = banana => {
  return {
    type: ACTION_SELECT_CITY,
    payload: {
      banana
    }
  };
};
