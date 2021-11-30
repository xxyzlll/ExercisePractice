import * as React from "react";

interface IAppOwnProps {
}

export interface IAppStateProps {
}

interface IAppOwnState {
}

export interface IAppDispatchProps {
}

class Me extends React.Component<any, any> {

  constructor(props: IAppOwnProps & IAppStateProps & IAppDispatchProps) {
    super(props);
    this.state = {};
  }


  componentDidMount = async () => {
  };

  componentWillUnmount = () => {
  };

  render() {
    return (
        <>
          <div>me</div>
        </>
    );
  }
}

export default Me;
