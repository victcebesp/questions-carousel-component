import DefaultValidation from "../validations/defaultValidation"

export default class DropDownValidationManager {
  constructor(validationSpecifications) {
    if (!validationSpecifications) validationSpecifications = []
    this.validations = validationSpecifications.map((s) => this.toValidation(s))
  }

  toValidation = (validationSpecification) => new DefaultValidation()

  validate = (answer) => {
    const validationResults = this.validations.map((v) => {
      return { isValid: v.validate(answer), explanation: v.getExplanation() }
    })
    const isValid = validationResults.every((r) => r.isValid)
    const explanations = validationResults
      .filter((r) => !r.isValid)
      .map((r) => r.explanation)
    return {
      isValid,
      explanations,
    }
  }
}
