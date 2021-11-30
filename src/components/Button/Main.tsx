import * as React from "react";
import "./styles.css"

export interface Props {
  buttonText?: string,
  styleOptions?: React.CSSProperties,
  onClick: () => void
}

export interface States {
}

class Button extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    this.props.onClick()
  }

  render() {
    const { buttonText, styleOptions } = this.props
    return (
        <>
          <button style={styleOptions} onClick={this.onClick} className='buttonBaseStyle'>
            {buttonText || 'Button'}
          </button>
        </>
    );
  }
}

export default Button;
