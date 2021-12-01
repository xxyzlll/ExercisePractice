import * as React from "react";
import Header from "@/pages/home/components/header";
import Menu from "@/components/Menu";
import { menuTree } from "@/model/me";
import Form from "@/components/Form";
import CountDownButton from "@/components/CountDownButton/CountDownButton";
import Dropdown from "@/components/Dropdown";
import Modal from "@/components/Modal/Main";

interface IAppOwnProps {
}

interface IAppOwnState {
  menuTree: menuTree[],
  dropList: any[],
  visible:boolean
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
      dropList: [1, 2, 3],
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
      ],
      visible: false
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
  clickDropdown = (index: number) => {
    console.log(index)
  }
  sendVCode = () => {

  }
  showModal=() =>{
    this.setState({ visible: true })
  }

  closeModal=() =>{
    console.log('我是onClose回调')
  }

  confirm=()=> {
    console.log('我是confirm回调')
  }
  render() {
    return (
        <>
          <Header title={"Me"}/>
          <Menu menuTree={this.state.menuTree}
                title={"Typescript"}
                clickMenu={this.clickMenu}
                theme={"dark"}/>
          <Form type={"textarea"}/>
          <CountDownButton timerCount={2}
                           enable={false}
                           textStyle={null}
                           hadSend={this.sendVCode}/>
          <Dropdown text={'header'}
                    dropList={this.state.dropList}
                    clickDropdown={this.clickDropdown}/>
          <button onClick={this.showModal}>click here</button>
          <Modal
              visible={this.state.visible}
              title="这是自定义title"
              confirm={this.confirm}
              onClose={this.closeModal}
          >
            这是自定义content
          </Modal>
        </>
    );
  }
}

export default Me;
