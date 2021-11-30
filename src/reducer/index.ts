import { combineReducers } from "redux";
import Home, { IHomeState, initialHomeState } from "./home";

export interface IState {
  HomeState: IHomeState;
}

export const initialState: IState = {
  HomeState: initialHomeState
};

export default combineReducers({
  HomeState: Home
});
