import * as React from "react";
import Header from "@/pages/home/components/header";
import Dropdown from "@/components/Dropdown";

interface IAppOwnProps {
}

interface IAppOwnState {
}

export interface IAppDispatchProps {
  add: (num: number) => void
}

export interface IAppStateProps {
  num: number
}

class Me extends React.Component<IAppOwnProps & IAppDispatchProps & IAppStateProps, IAppOwnState> {
  constructor(props: IAppOwnProps & IAppStateProps & IAppDispatchProps) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
  };

  componentWillUnmount = () => {
  };

  render() {
    return (
        <>
          <Header title={"Me"}/>
          <Dropdown text={'hey'}/>
        </>
    );
  }
}

export default Me;
