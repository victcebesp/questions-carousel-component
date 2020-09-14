import React, { Component } from "react"

class DropDownInput extends Component {
  render() {
    return (
      <select
        autoFocus
        className="custom-select"
        onChange={(event) => this.props.onChange(event.target.value)}
        defaultValue={this.getDefaultValue()}
        onBlur={this.props.onBlur}
      >
        {this.getOptions()}
      </select>
    )
  }

  getDefaultValue = () => {
    const { initialValue } = this.props
    return initialValue ? initialValue : this.props.options[0]
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
