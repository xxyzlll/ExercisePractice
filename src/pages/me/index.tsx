import Me, { IAppDispatchProps, IAppStateProps } from "./Main";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "../../reducer";
import { Action } from "redux";
import actionCreators from "../../actions";

const mapStateToProps = (state: IState): IAppStateProps => ({
  num: state.HomeState.num
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, void, Action>): IAppDispatchProps => ({
  add: (num: number) => dispatch(actionCreators.add(num))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Me);
