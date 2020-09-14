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

    this.state = {
      explanations: [],
      isValid: this.validationManager.validate(this.props.initialValue),
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
          onClick={this.handleClick}
          onBlur={() => {
            this.state.isValid &&
              this.props.onBlur(
                this.props.question.id,
                this.state.currentAnswer
              )
          }}
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

export default StringQuestion
