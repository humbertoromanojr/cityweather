import { SELECT_CITY } from "../actions/actionTypes";

const initialState = {
  city: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return {
        ...state,
        city: action.payload.city
      };
    default:
      return state;
  }
};

export default reducer;
