import { ACTION_SELECT_CITY } from "../actions/actionTypes";

const initialState = {
  reduxSelectCity: ""
};

const reducer = (state = initialState, action) => {
  console.log(`TRIGGERED ACTION__: ${JSON.stringify(action, undefined, 2)}`);

  switch (action.type) {
    case ACTION_SELECT_CITY:
      return {
        ...state,
        reduxSelectCity: action.payload.banana
      };
    default:
      return state;
  }
};

export default reducer;