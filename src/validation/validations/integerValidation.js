export default class IntegerValidation {
  validate = (currentAnswer) => Number.isInteger(Number(currentAnswer))

  getExplanation = () => "The answer should be an integer."
}
