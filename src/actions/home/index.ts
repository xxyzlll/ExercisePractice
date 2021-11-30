import { HomeActionTypes } from "./type";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "../../reducer";
import { Action } from "redux";

export function add(num: number) {
  return async (dispatch: ThunkDispatch<IState, void, Action>, getState: () => IState) => {
    console.log("HomeState:", getState().HomeState.num)
    dispatch({
      type: HomeActionTypes.ADD_TODO,
      payload: {
        num: num
      }
    });
  };
}
