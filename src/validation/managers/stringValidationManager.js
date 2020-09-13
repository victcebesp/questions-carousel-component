import AlphabeticValidation from "../validations/alphabeticValidation"
import EmptyValidation from "../validations/emptyValidation"
import LengthValidation from "../validations/lengthValidation"
import DefaultValidation from "../validations/defaultValidation"

export default class StringValidationManager {
  constructor(validationSpecifications) {
    this.validations = [new AlphabeticValidation(), new EmptyValidation()]
    this.validations.push(
      ...validationSpecifications.map((s) => this.toValidation(s))
    )
  }

  toValidation = (validationSpecification) => {
    if (validationSpecification.type === "Length")
      return new LengthValidation(validationSpecification.maximum)
    else return new DefaultValidation()
  }

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
