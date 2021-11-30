export enum HomeActionTypes {
  ADD_TODO = "HOME/ADD_TODO"
}

export interface ADD_TODO {
  type: HomeActionTypes.ADD_TODO;
  payload: {
    num: number
  };
}

export type HomeAction =
    ADD_TODO
