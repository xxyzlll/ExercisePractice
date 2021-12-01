import * as React from "react";
import "./styles.css"

export type buttonType = 'warn' | 'success' | 'error'

export interface Props {
  buttonText?: string,
  styleOptions?: React.CSSProperties,
  onClick?: () => void,
  type?: buttonType
}

export interface States {
  backgroundColor: string
}

class Button extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      backgroundColor: "#40a9ff"
    };
  }

  componentDidMount = () => {
    const { type } = this.props
    this.setState({
      backgroundColor:
          type === "success" ? "#40a9ff" : type === "warn" ? "#dedc81" : "#ff4d4f"
    })
  }

  onClick = () => {
    this.props.onClick && this.props.onClick()
  }

  render() {
    const { buttonText, styleOptions } = this.props
    // assign 相同的元素第一个会被第二个覆盖
    const styleOption = Object.assign({}, styleOptions, { backgroundColor: this.state.backgroundColor })
    return (
        <>
          <button style={styleOption} onClick={this.onClick} className='buttonBaseStyle'>
            {buttonText || 'Button'}
          </button>
        </>
    );
  }
}

export default Button;
