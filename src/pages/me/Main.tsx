import * as React from "react";
import Header from "@/pages/home/components/header";
import Menu from "@/components/Menu";
import { menuTree } from "@/model/me";

interface IAppOwnProps {
}

interface IAppOwnState {
  menuTree: menuTree[]
}

export interface IAppDispatchProps {
  add: (num: number) => void
}

export interface IAppStateProps {
  num: number
}

class Me extends React.Component<IAppOwnProps & IAppDispatchProps & IAppStateProps, IAppOwnState> {
  constructor(props: IAppOwnProps & IAppStateProps & IAppDispatchProps) {
    super(props);
    this.state = {
      menuTree: [
        {
          label: "1", showChildTree: true, children: [{
            label: "1-1",
          }, {
            label: "1-2"
          }, {
            label: "1-3"
          }
          ]
        }, {
          label: "2", showChildTree: false, children: [{
            label: "2-1"
          }, {
            label: "2-2"
          }, {
            label: "2-3"
          }
          ]
        }, {
          label: "3", showChildTree: true, children: [{
            label: "3-1"
          }
          ]
        }
      ]
    };
  }

  componentDidMount = () => {
  };

  componentWillUnmount = () => {
  };

  clickMenu = (index: number) => {
    let newMenuTree = [...this.state.menuTree]
    newMenuTree[index].showChildTree = !newMenuTree[index].showChildTree
    this.setState({
      menuTree: newMenuTree
    })
  }

  render() {
    return (
        <>
          <Header title={"Me"}/>
          <Menu menuTree={this.state.menuTree}
                clickMenu={this.clickMenu}
                theme={"dark"}/>
        </>
    );
  }
}

export default Me;
