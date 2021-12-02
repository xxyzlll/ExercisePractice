import * as React from "react";
import "./styles.less"

export interface Props {
  title?: string
}

export interface States {
}

class Header extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
  };

  componentWillUnmount = () => {
  };

  render() {
    const { title } = this.props
    return (
        <div className="header">
          <span className="header_left">
            <i className="iconfont icon">&#xe6a6;</i>
            {title || "Header"}
          </span>
          <div className="header_right">
            <input type={"text"} className="header_right_input"/>
            <span>快速上手</span>
            <span>组件</span>
            <span>帮助</span>
            <i className="iconfont icon">&#xe600;</i>
          </div>
        </div>
    );
  }
}

export default Header;
