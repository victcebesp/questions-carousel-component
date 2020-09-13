import React, { Component } from "react"

class DropDownInput extends Component {
  render() {
    return (
      <div>
        <select
          onChange={(event) => this.props.onChange(event.target.value)}
          defaultValue={this.getDefaultValue()}
        >
          {this.getOptions()}
        </select>
      </div>
    )
  }

  getDefaultValue = () => {
    if (this.props.initialValue) {
      return this.props.initialValue
    }
    return this.props.options[0]
  }

  getOptions = () => {
    return this.props.options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))
  }
}

export default DropDownInput
