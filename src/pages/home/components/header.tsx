import * as React from "react";
import "./styles.css"

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
          <span>{title || "Header"}</span>
        </div>
    );
  }
}

export default Header;
