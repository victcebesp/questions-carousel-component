import React, { Component } from "react"
import questionsConfigurations from "../../data/questionsConfigurations"
import userData from "../../data/userData"
import IntegerQuestion from "../molecules/integerQuestion"
import StringQuestion from "../molecules/stringQuestion"
import DropDownQuestion from "../molecules/dropDownQuestion"

class QuestionsCarousel extends Component {
  state = {
    questionsConfigurations: questionsConfigurations,
    userData: userData,
    currentQuestionId: 0,
    answers: [],
  }

  render() {
    return <div>{this.getComponentToShow()}</div>
  }

  getComponentToShow = () => {
    if (
      this.state.currentQuestionId === this.state.questionsConfigurations.length
    )
      return <button className="btn btn-success btn-lg">Done!</button>
    else return this.getCurrentQuestion()
  }

  getCurrentQuestion = () => {
    const currentQuestion = this.state.questionsConfigurations.find(
      (q) => q.id === this.state.currentQuestionId
    )
    const userDataForCurrentQuestion = this.state.userData.find(
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
          tabIndex={question.id}
          onBlur={this.handleBlur}
        />
      )
    } else if (question.answerType === "String") {
      return (
        <StringQuestion
          key={question.id}
          question={question}
          initialValue={initialValue}
          tabIndex={question.id}
          onBlur={this.handleBlur}
        />
      )
    } else if (question.answerType === "DropDown") {
      return (
        <DropDownQuestion
          key={question.id}
          question={question}
          initialValue={initialValue}
          tabIndex={question.id}
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
    while (nextQuestionId < this.state.questionsConfigurations.length) {
      let { conditions } = this.state.questionsConfigurations.find(
        (q) => q.id === nextQuestionId
      )
      if (
        conditions.length === 0 ||
        this.itSatisfiesAllConditions(conditions, answer)
      )
        return nextQuestionId
      else nextQuestionId++
    }
    return nextQuestionId
  }

  itSatisfiesAllConditions = (conditions, answer) => {
    let answers = [...this.state.answers]
    answers.push(answer)
    for (let i in conditions) {
      let condition = conditions[i]
      if (
        condition.answer !==
        answers.find((a) => a.questionId === condition.question).answer
      )
        return false
    }
    return true
  }
}

export default QuestionsCarousel
