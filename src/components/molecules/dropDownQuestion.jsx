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

    this.state = {
      explanations: [],
      isValid: true,
      currentAnswer: this.props.initialValue
        ? this.props.initialValue
        : this.props.options[0],
    }
  }

  render() {
    return (
      <div className="question">
        <QuestionLabel text={this.props.question.questionLabel} />
        <DropDownInput
          onChange={this.handleChange}
          onBlur={() =>
            this.state.isValid &&
            this.props.onBlur(this.props.question.id, this.state.currentAnswer)
          }
          options={this.props.question.dropDownOptions}
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

export default DropDownQuestion
