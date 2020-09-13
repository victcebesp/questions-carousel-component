export default class EmptyValidation {
  validate = (answer) => answer.length > 0

  getExplanation = () => "Empty answers are not valid."
}
