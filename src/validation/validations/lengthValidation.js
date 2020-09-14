import NegativeLengthException from "../exceptions/negativeLengthException"
export default class LengthValidation {
  constructor(maximumLength) {
    if (maximumLength < 0) throw new NegativeLengthException()
    this.maximumLength = maximumLength
  }

  validate = (currentAnswer) => currentAnswer.length <= this.maximumLength

  getExplanation = () =>
    `The answer can have a maximum of ${this.maximumLength} characters.`
}
