import * as React from "react";
import "./styles.css"
import { MouseEventHandler } from "react";

export interface Props {
  text: string,
  dropList?: any,
  clickDropdown?: (index: number) => void
}

export interface States {
  showList: boolean
}

class Dropdown extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showList: false
    };
  }

  componentDidMount = () => {
  }

  listItem = () => {
    const { dropList } = this.props
    return (
        dropList && dropList.map((item: any, index: number) =>
            <div key={index} className="item" onClick={() => this.clickItem(index)}>{item}</div>
        )
    )
  }

  clickItem = (index: number) => {
    this.changeStatus()
    this.props.clickDropdown && this.props.clickDropdown(index)
  }

  changeStatus = () => {
    this.setState({
      showList: !this.state.showList
    })
  }

  render() {
    const { text } = this.props
    return (
        <>
          <div className="main_title">
            <div onClick={this.changeStatus}>
              {text}
              <i className="iconfont space">&#xe65e;</i>
            </div>
            {this.state.showList && <div className="drop_list">
                <this.listItem/>
            </div>}
          </div>
        </>
    );
  }
}

export default Dropdown;
