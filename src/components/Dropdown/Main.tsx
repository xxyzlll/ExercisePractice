import * as React from "react";
import "./styles.css"

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
    const { clickDropdown } = this.props
    this.changeStatus()
    clickDropdown && clickDropdown(index)
  }

  changeStatus = () => {
    this.setState({
      showList: !this.state.showList
    })
  }

  render() {
    const { text } = this.props
    const { showList } = this.state
    return (
        <>
          <div className="main_title">
            <div onClick={this.changeStatus}>
              {text}
              <i className="iconfont space">&#xe65e;</i>
            </div>
            {showList && <div className="drop_list">
                <this.listItem/>
            </div>}
          </div>
        </>
    );
  }
}

export default Dropdown;
