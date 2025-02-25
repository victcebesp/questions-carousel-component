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
      isValid: this.validationManager.validate(this.props.initialValue).isValid,
      currentAnswer: this.props.initialValue,
    }
  }

  render() {
    return (
      <div className="question">
        <QuestionLabel text={this.props.question.questionLabel} />
        <Input
          initialValue={this.state.currentAnswer}
          onChange={this.handleChange}
          onBlur={() =>
            this.state.isValid &&
            this.props.onBlur(this.props.question.id, this.state.currentAnswer)
          }
          onClick={this.handleClick}
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

  handleClick = () => {
    const { isValid, explanations } = this.validationManager.validate(
      this.state.currentAnswer
    )
    this.setState({ isValid, explanations })
  }

  getInvalidExplanations = () => {
    return this.state.explanations.map((explanation, index) => (
      <div key={index} className="alert alert-danger" role="alert">
        {explanation}
      </div>
    ))
  }
}

export default IntegerQuestion
