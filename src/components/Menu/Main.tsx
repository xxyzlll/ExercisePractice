import * as React from "react";
import "./styles.css"
import { MouseEventHandler } from "react";
import { menuTree } from "@/model/me";

export interface Props {
  menuTree?: any,
  clickMenu: (index: number) => void
}

export interface States {
}

class Menu extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
  }

  listItem = () => {
    const { menuTree } = this.props
    if (!menuTree?.length) {
      return (<div>a</div>)
    }
    return (
        menuTree && menuTree.map((item: any, index: number) =>
            <div key={`deep${index}`}>
              <div className="treeItem" onClick={() => this.clickItem(index)}>{item.label}
                {!item.showChildTree ?
                    <i className="iconfont menu_icon">&#xe62f;</i> :
                    <i className="iconfont menu_icon">&#xe62d;</i>}
              </div>

              {item.children && item.showChildTree && item.children.map((item: any) =>
                  <div key={`child${item.label}`}
                       className="treeItem_child treeItem">{item.label}</div>)}
            </div>
        )
    )
  }

  clickItem = (index: number) => {
    const { clickMenu } = this.props
    clickMenu && clickMenu(index)
  }


  render() {
    const {} = this.props
    const {} = this.state
    return (
        <>
          <div className="menu">
            <this.listItem/>
          </div>
        </>
    );
  }
}

export default Menu;
