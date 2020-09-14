import MinimumGreaterThanMaximumException from "../exceptions/minimumGreaterThanMaximumException"
export default class RangeValidation {
  constructor(minimum, maximum) {
    if (minimum > maximum) throw new MinimumGreaterThanMaximumException()
    this.minimum = minimum
    this.maximum = maximum
  }

  validate = (answer) => answer >= this.minimum && answer <= this.maximum

  getExplanation = () =>
    `The answer should be in the range [${this.minimum}, ${this.maximum}].`
}
