import * as React from "react";
import "./styles.css"
import Input from './components/Input'
import { InputHTMLAttributes } from "react";

export interface Props {
  type?: string
}

export interface States {
  value: string
}

class Form extends React.Component<Props | InputHTMLAttributes<any>, States> {
  constructor(props: Props) {
    super(props);
    this.state = { value: "" };
  }

  private node: any = null
  componentDidMount = () => {
    console.log(this.node)
  }

  handleSubmit = () => {

  }

  render() {
    const { ...args } = this.props
    return (
        <>
          <form onSubmit={this.handleSubmit}>
            <label>
              <Input {...args} ref={(node) => this.node = node}/>
            </label>
            <button>a</button>
          </form>
        </>
    );
  }
}

export default Form;
