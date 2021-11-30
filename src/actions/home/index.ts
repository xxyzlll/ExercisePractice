import {
  HomeActionTypes
} from "./type";

export interface ADD_TODO {
  type: HomeActionTypes.ADD_TODO;
  payload: {
    num: number,
  };
}

export type HomeAction = ADD_TODO
