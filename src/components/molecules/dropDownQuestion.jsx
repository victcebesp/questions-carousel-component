import React, { Component } from "react"
import QuestionLabel from "../atoms/questionLabel"
import DropDownInput from "../atoms/dropDownInput"
import DropDownValidationManager from "../../validation/managers/dropDownValidationManager"

class DropDownQuestion extends Component {
  constructor(props) {
    super(props)

    this.validationManager = new DropDownValidationManager(
      this.props.question.answerValidationsSpecifications
    )
  }

  state = {
    explanations: [],
    isValid: true,
    currentAnswer: this.props.initialValue
      ? this.props.initialValue
      : this.props.options[0],
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
        <DropDownInput
          onChange={this.handleChange}
          options={this.props.question.dropDownOptions}
          initialValue={this.state.currentAnswer}
        />
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

export default DropDownQuestion
