import React, { Component } from "react"

class Input extends Component {
  render() {
    return (
      <input
        autoFocus
        className="form-control"
        id="input"
        onChange={(event) => this.props.onChange(event.target.value)}
        placeholder="Type your answer here..."
        onBlur={this.props.onBlur}
      />
    )
  }

  componentDidMount = () => {
    const { initialValue } = this.props
    if (initialValue) document.getElementById("input").value = initialValue
  }
}

export default Input
