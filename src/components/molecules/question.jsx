import React, { Component } from "react"
import QuestionLabel from "../atoms/questionLabel"
import NextButton from "../atoms/nextButton"
import Input from "../atoms/input"

class Question extends Component {
  handleFocus = () => {
    console.log("Bare question input field on focus")
  }
  render() {
    return (
      <div>
        <QuestionLabel text={this.props.question.questionLabel} />
        <Input onFocus={this.handleFocus()} />
        <NextButton />
      </div>
    )
  }
}

export default Question
