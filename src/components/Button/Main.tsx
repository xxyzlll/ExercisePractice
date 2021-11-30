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
    if (type === "success") {
      this.setState({
        backgroundColor: "#40a9ff"
      })
    } else if (type === "warn") {
      this.setState({
        backgroundColor: "#dedc81",
      })
    } else if (type === "error") {
      this.setState({
        backgroundColor: "#ff4d4f"
      })
    } else {
    }
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
