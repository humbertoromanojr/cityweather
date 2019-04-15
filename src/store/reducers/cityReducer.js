import { SELECT_CITY } from "../actions/actionTypes";

const initialState = {
  selectCity: ""
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case SELECT_CITY:
      return {
        ...state,
        selectCity: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
