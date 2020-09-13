export default class AlphabeticValidation {
  validate = (answer) => answer.match("^[a-zA-Z]+$")

  getExplanation = () => `The answer can only have alphabetic characters.`
}
