import React, { Component } from 'react';
import NewPortal from "./components/newPortal";
import './styles.css';
import Transition from "@/components/Transition/Main";
class Modal extends Component <any,any>{
    constructor(props:any) {
        super(props)
        this.confirm = this.confirm.bind(this)
        this.maskClick = this.maskClick.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            visible: false,
        }
    }

    componentDidMount() {
        this.setState({ visible: this.props.visible })
    }

    componentWillReceiveProps(props:any) {
        this.setState({ visible: props.visible })
    }

    closeModal() {
        console.log('大家好，我叫取消，听说你们想点我？傲娇脸👸')
        const { onClose } = this.props
        onClose && onClose()
        this.setState({ visible: false })
    }

    confirm() {
        console.log('大家好，我叫确认，楼上的取消是我儿子，脑子有点那个~')
        const { confirm } = this.props
        confirm && confirm()
        this.setState({ visible: false })
    }

    maskClick() {
        console.log('大家好，我是蒙层，我被点击了')
        this.setState({ visible: false })
    }

    render() {
        const { visible } = this.state;
        const { title, children } = this.props;
        return <NewPortal>
            {/* 引入transition组件，去掉了外层的modal-wrapper */}
            <Transition
                visible={visible}
                transitionName="modal"
                enterActiveTimeout={200}
                enterEndTimeout={100}
                leaveActiveTimeout={100}
                leaveEndTimeout={200}
            >
                <div className="modal">
                    <div className="modal-title">{title}</div>
                    <div className="modal-content">{children}</div>
                    <div className="modal-operator">
                        <button
                            onClick={this.closeModal}
                            className="modal-operator-close"
                        >取消</button>
                        <button
                            onClick={this.confirm}
                            className="modal-operator-confirm"
                        >确认</button>
                    </div>
                </div>
                {/* 这里的mask也可以用transition组件包裹，添加淡入淡出的过渡效果，这里不再添加，有兴趣的读者可以自己实践下 */}
                {/* <div
          className="mask"
          onClick={this.maskClick}
        ></div> */}
            </Transition>
        </NewPortal>
    }
}
export default Modal;
