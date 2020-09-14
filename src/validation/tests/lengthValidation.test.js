import LengthValidation from "../validations/lengthValidation"
import NegativeLengthException from "../exceptions/negativeLengthException"

test("String with more characters than the maximum returns false", () =>
  expect(new LengthValidation(4).validate("12345")).toBeFalsy())

test("String with less characters than the maximum returns true", () =>
  expect(new LengthValidation(4).validate("123")).toBeTruthy())

test("String with the maximum number of characters returns true", () =>
  expect(new LengthValidation(4).validate("1234")).toBeTruthy())

test("Negative maximum length is treated as zero", () => {
  const createLengthValidation = () => new LengthValidation(-4)
  expect(createLengthValidation).toThrow(NegativeLengthException)
})
