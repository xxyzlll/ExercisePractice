import * as React from "react";
import { Link } from "react-router-dom";
import './styles.css'
import Button from "../../components/Button";

export interface IAppStateProps {
}

interface IAppOwnProps {
}

interface IAppOwnState {
  num: number
}

export interface IAppDispatchProps {
}

class Home extends React.Component<any, IAppOwnState> {
  constructor(props: any) {
    super(props);
    this.state = {
      num: 0
    };
  }

  componentDidMount = () => {
  };

  componentWillUnmount = () => {
  };

  add = () => {
    this.setState({
      num: this.state.num + 1
    })
  }

  reduce = () => {
    this.setState({
      num: this.state.num - 1
    })
  }

  clickButton = () => {
    alert("点击")
  }

  render() {
    const { num } = this.state
    return (
        <div className='home'>
          <div>a</div>
          <Link to="/me">Authors</Link>
          <div>
            <Button buttonText={'hello'}
                    styleOptions={{
                      color: 'red'
                    }}
                    onClick={this.clickButton}/>
            <span>计数器：
              <button onClick={this.add}> + </button>
              {num}
              <button onClick={this.reduce}> - </button>
            </span>

          </div>
        </div>
    );
  }
}

export default Home;
