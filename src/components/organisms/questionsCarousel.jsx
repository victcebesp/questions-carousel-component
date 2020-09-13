import React, { Component } from "react"

import IntegerQuestion from "../molecules/integerQuestion"
import StringQuestion from "../molecules/stringQuestion"
import DropDownQuestion from "../molecules/dropDownQuestion"

class QuestionsCarousel extends Component {
  state = {
    currentQuestionId: 0,
    answers: [],
  }

  render() {
    return <div>{this.getComponentToShow()}</div>
  }

  getComponentToShow = () => {
    if (
      this.state.currentQuestionId === this.props.questionsConfigurations.length
    )
      return <button className="btn btn-success btn-lg">Done!</button>
    else return this.getCurrentQuestion()
  }

  getCurrentQuestion = () => {
    const currentQuestion = this.props.questionsConfigurations.find(
      (q) => q.id === this.state.currentQuestionId
    )
    const userDataForCurrentQuestion = this.props.userData.find(
      (d) => d.questionId === currentQuestion.id
    )
    const initialValue = userDataForCurrentQuestion
      ? userDataForCurrentQuestion.answer
      : null

    return this.toQuestionComponent(currentQuestion, initialValue)
  }

  toQuestionComponent = (question, initialValue) => {
    if (question.answerType === "Integer") {
      return (
        <IntegerQuestion
          key={question.id}
          question={question}
          initialValue={initialValue}
          onBlur={this.handleBlur}
        />
      )
    } else if (question.answerType === "String") {
      return (
        <StringQuestion
          key={question.id}
          question={question}
          initialValue={initialValue}
          onBlur={this.handleBlur}
        />
      )
    } else if (question.answerType === "DropDown") {
      return (
        <DropDownQuestion
          key={question.id}
          question={question}
          initialValue={initialValue}
          onBlur={this.handleBlur}
        />
      )
    }
  }

  handleBlur = (answeredQuestionId, answer) => {
    let answers = [...this.state.answers]
    answers.push({
      questionId: answeredQuestionId,
      answer: answer,
    })
    this.setState({
      answers: answers,
      currentQuestionId: this.getNextQuestionId({
        questionId: answeredQuestionId,
        answer: answer,
      }),
    })
  }

  getNextQuestionId = (answer) => {
    let nextQuestionId = this.state.currentQuestionId + 1
    const { questionsConfigurations } = this.props
    while (nextQuestionId < questionsConfigurations.length) {
      let { askingConditions } = questionsConfigurations.find(
        (q) => q.id === nextQuestionId
      )
      if (
        askingConditions.length === 0 ||
        this.itSatisfiesAllAskingConditions(askingConditions, answer)
      )
        return nextQuestionId
      else nextQuestionId++
    }
    return nextQuestionId
  }

  itSatisfiesAllAskingConditions = (askingConditions, answer) => {
    let answers = [...this.state.answers]
    answers.push(answer)
    for (let i in askingConditions) {
      let condition = askingConditions[i]
      const answerForContition = answers.find(
        (a) => a.questionId === condition.question
      )
      if (condition.answer !== answerForContition.answer) return false
    }
    return true
  }
}

export default QuestionsCarousel
