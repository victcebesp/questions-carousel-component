export default class LengthValidation {
  constructor(maximumLength) {
    this.maximumLength = maximumLength
  }

  validate = (currentAnswer) => currentAnswer.length <= this.maximumLength

  getExplanation = () =>
    `The answer can have a maximum of ${this.maximumLength} characters.`
}
