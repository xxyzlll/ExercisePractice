import * as React from "react";
import Header from "../home/components/header";

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
        </>
    );
  }
}

export default Me;
