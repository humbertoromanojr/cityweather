import { ACTION_UF } from "./actionTypes";

export const actionUf = uf => {
  return {
    type: ACTION_UF,
    payload: {
      uf
    }
  };
};
