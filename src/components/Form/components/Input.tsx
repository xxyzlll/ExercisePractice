import * as React from "react";

export default class Input extends React.Component<any, any> {

  private input: HTMLInputElement | null = null
  private textarea: HTMLTextAreaElement | null = null
  handleChange = (e: any) => {
    console.log(1)
  }

  render() {
    const { type, inputRef, ...args } = this.props
    if (type === "text") {
      return (
          <input type="text"
                 onChange={this.handleChange}
                 {...args}
                 ref={(input) => this.input = input}/>
      )
    } else if (type === "textarea") {
      return (
          <textarea onChange={this.handleChange}
                    {...args}
                    ref={(textarea) => this.textarea = textarea}/>
      )
    } else {
      return null
    }
  }
}
