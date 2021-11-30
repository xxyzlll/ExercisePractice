import produce from "immer";
import { HomeAction, HomeActionTypes } from "../../actions/home/type";

export const initialHomeState: IHomeState = {
  num: 0
};

export interface IHomeState {
  num: number;
}

export default function addReducer(state: IHomeState = initialHomeState, action: HomeAction) {
  return produce(state, (draft: IHomeState) => {
    switch (action.type) {
      case HomeActionTypes.ADD_TODO:
        draft.num = Number(action.payload.num);
        break;
    }
  });
}
