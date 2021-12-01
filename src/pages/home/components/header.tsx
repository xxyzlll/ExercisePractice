import * as React from "react";
import "./styles.css"
import Dropdown from "@/components/Dropdown";

export interface Props {
  title?: string
}

export interface States {
  dropList: any[]
}

class Header extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dropList: [1, 2, 3]
    };
  }

  componentDidMount = () => {
  };

  componentWillUnmount = () => {
  };
  clickDropdown = (index: number) => {
    console.log(index)
  }

  render() {
    const { title } = this.props
    return (
        <div className="header">
          {title || "Header"}
          <Dropdown text={'header'}
                    dropList={this.state.dropList}
                    clickDropdown={this.clickDropdown}/>
        </div>
    );
  }
}

export default Header;
