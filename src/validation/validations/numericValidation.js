export default class NumericValidation {
  validate = (answer) => !isNaN(answer)

  getExplanation = () => "The answer should be a number."
}
