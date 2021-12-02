import * as React from "react";
import { Link } from "react-router-dom";
import './styles.less'
import Header from "./components/header";
import Button from "@/components/Button";

export interface IAppOwnProps {
}

export interface IAppOwnState {
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
    this.state = {};
  }

  componentDidMount = () => {
  };

  componentWillUnmount = () => {
  };

  PageNeck = () => {
    return (
        <div className="neck">
          <div className="neck_top">Happy UI</div>
          <div className="neck_mid">文档基于____生成</div>
          <div className="neck_bottom">
            <Button type={"success"}
                    buttonText={"快速上手"}
                    styleOptions={{
                      padding: "0 32px",
                      borderRadius:22,
                      fontSize:16,
                      height: 44,
                      fontWeight:600
                    }}/>
          </div>
        </div>
    )
  }

  render() {
    const { PageNeck } = this
    return (
        <div className='home'>
          <Header title={"Happy UI"}/>
          <PageNeck/>
        </div>
    );
  }
}

export default Home;
