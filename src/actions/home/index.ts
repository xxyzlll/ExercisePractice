import { HomeActionTypes } from "./type";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "../../reducer";
import { Action } from "redux";

export interface ADD_TODO {
  type: HomeActionTypes.ADD_TODO;
  payload: {
    num: number,
  };
}

export function add(num: number) {
  return async (dispatch: ThunkDispatch<IState, void, Action>) => {
    dispatch({
      type: HomeActionTypes.ADD_TODO,
      payload: {
        num: num
      }
    });
  };
}
