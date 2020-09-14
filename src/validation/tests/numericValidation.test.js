import NumericValidation from "../validations/numericValidation"

test("Integer returns true", () =>
  expect(new NumericValidation().validate("12345")).toBeTruthy())

test("Float with dot returns true", () =>
  expect(new NumericValidation().validate("3.1415")).toBeTruthy())

test("String with alphabetic characters return false", () =>
  expect(new NumericValidation().validate("3px")).toBeFalsy())
