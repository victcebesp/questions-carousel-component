import React, { Component } from "react"
import QuestionLabel from "../atoms/questionLabel"
import Input from "../atoms/input"
import IntegerValidationManager from "../../validation/managers/integerValidationManager"

class IntegerQuestion extends Component {
  constructor(props) {
    super(props)

    this.validationManager = new IntegerValidationManager(
      this.props.question.answerValidationsSpecifications
    )

    this.state = {
      explanations: [],
      isValid: this.props.initialValue !== null,
      currentAnswer: this.props.initialValue,
    }
  }

  render() {
    return (
      <div
        tabIndex={this.props.tabIndex}
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
      <p key={index}>{explanation}</p>
    ))
  }
}

export default IntegerQuestion
