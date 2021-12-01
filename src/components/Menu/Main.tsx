import * as React from "react";
import "./styles.css"
import { MouseEventHandler } from "react";
import { menuTree } from "@/model/me";

export type menuTheme = 'dark' | 'light'

export interface Props {
  menuTree?: any,
  clickMenu: (index: number) => void,
  theme?: menuTheme
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
    const { menuTree, theme } = this.props
    let themeClass = theme ?
        theme === "dark" ? "dark_theme_color dark_hover" :
            "light_theme_color light_hover" : "dark_theme_color dark_hover"

    let themeChildClass = theme ? theme === "dark" ?
        "dark_theme_child_color dark_hover" :
        "light_theme_child_color light_hover" : "dark_theme_child_color dark_hover"

    let themeBackColor = ['treeItem', themeClass].join(" ")
    let themeChildBackColor = ['treeItem_child treeItem', themeChildClass].join(" ")

    if (!menuTree?.length) {
      return null
    }
    return (
        menuTree && menuTree.map((item: any, index: number) =>
            <div key={`deep${index}`}>
              <div className={themeBackColor} onClick={() => this.clickItem(index)}>{item.label}
                {!item.showChildTree ?
                    <i className="iconfont menu_icon">&#xe62f;</i> :
                    <i className="iconfont menu_icon">&#xe62d;</i>}
              </div>

              {item.children && item.showChildTree && item.children.map((item: any) =>
                  <div key={`child${item.label}`}
                       className={themeChildBackColor}>{item.label}</div>)}
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
