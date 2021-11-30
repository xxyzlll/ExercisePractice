import * as React from "react";
import { Link } from "react-router-dom";
import './styles.css'
import Button from "../../components/Button";
import Header from "./components/header";

export interface IAppOwnProps {
}

export interface IAppOwnState {
  nums: number
}

export interface IAppDispatchProps {
  add: (num: number) => void
}

export interface IAppStateProps {
  num: number
}

class Home extends React.Component<IAppOwnProps & IAppDispatchProps & IAppStateProps, IAppOwnState> {
  constructor(props: IAppOwnProps & IAppDispatchProps & IAppStateProps) {
    super(props);
    this.state = {
      nums: 0
    };
  }

  componentDidMount = () => {
  };

  componentWillUnmount = () => {
  };

  add = () => {
    this.setState({
      nums: this.state.nums + 1
    })
  }

  reduce = () => {
    this.setState({
      nums: this.state.nums - 1
    })
  }

  clickButton = async () => {
    // redux
    await this.props.add(5)
    console.log(this.props.num)
  }

  render() {
    const { nums } = this.state
    return (
        <div className='home'>
          <Header title={"React + TypeScript"}/>
          <Link to="/me" className='link'>Authors</Link>
          <div>
            <Button buttonText={'hello'}
                    type={'error'}
                    styleOptions={{
                      color: 'white',
                      backgroundColor: 'green'
                    }}
                    onClick={this.clickButton}/>
            <span>计数器：
              <button onClick={this.add}> + </button>
              {nums}
              <button onClick={this.reduce}> - </button>
            </span>

          </div>
        </div>
    );
  }
}

export default Home;
