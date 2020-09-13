import NumericValidation from "../validations/numericValidation"
import IntegerValidation from "../validations/integerValidation"
import RangeValidation from "../validations/rangeValidation"
import DefaultValidation from "../validations/defaultValidation"

export default class IntegerValidationManager {
  constructor(validationSpecifications) {
    this.validations = [new NumericValidation(), new IntegerValidation()]
    this.validations.push(
      ...validationSpecifications.map((s) => this.toValidation(s))
    )
  }

  toValidation = (validationSpecification) => {
    if (validationSpecification.type === "Range")
      return new RangeValidation(
        validationSpecification.minimum,
        validationSpecification.maximum
      )
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
