export default class AlphabeticValidation {
  validate = (answer) => /^[a-zA-Z]*$/.test(answer)

  getExplanation = () => `The answer can only have alphabetic characters.`
}
