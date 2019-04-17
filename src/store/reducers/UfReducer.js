import { ACTION_UF } from "../actions/actionTypes";

const initialState = {
  reduxUf: ""
};

const reducer = (state = initialState, action) => {
  console.log(`TRIGGERED ACTION__: ${JSON.stringify(action, undefined, 2)}`);

  switch (action.type) {
    case ACTION_UF:
      return {
        ...state,
        reduxUf: action.payload.uf
      };
    default:
      return state;
  }
};

export default reducer;
