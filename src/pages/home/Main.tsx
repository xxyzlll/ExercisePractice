import * as React from "react";
import { Link } from "react-router-dom";

export interface IAppStateProps {
}

interface IAppOwnProps {
}

interface IAppOwnState {
}

export interface IAppDispatchProps {
}

class Home extends React.Component<any, any> {
  constructor(props: any) {
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
          <div>a</div>
          <Link to="/me">Authors</Link>
        </>
    );
  }
}

export default Home;
