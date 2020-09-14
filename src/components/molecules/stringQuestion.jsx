import React, { Component } from "react"
import QuestionLabel from "../atoms/questionLabel"
import Input from "../atoms/input"
import StringValidationManager from "../../validation/managers/stringValidationManager"

class StringQuestion extends Component {
  constructor(props) {
    super(props)
    this.validationManager = new StringValidationManager(
      this.props.question.answerValidationsSpecifications
    )
  }

  state = {
    explanations: [],
    isValid: this.props.initialValue !== null,
    currentAnswer: this.props.initialValue,
  }

  render() {
    return (
      <div
        className="question"
        tabIndex="0"
        onBlur={() =>
          this.state.isValid &&
          this.props.onBlur(this.props.question.id, this.state.currentAnswer)
        }
      >
        <QuestionLabel text={this.props.question.questionLabel} />
        <Input
          onChange={this.handleChange}
          initialValue={this.state.currentAnswer}
        />
        {this.getInvalidExplanations()}
      </div>
    )
  }

  handleChange = (currentAnswer) => {
    const { isValid, explanations } = this.validationManager.validate(
      currentAnswer
    )
    this.setState({ isValid, explanations, currentAnswer })
  }

  getInvalidExplanations = () => {
    return this.state.explanations.map((explanation, index) => (
      <div key={index} className="alert alert-danger" role="alert">
        {explanation}
      </div>
    ))
  }
}

export default StringQuestion
