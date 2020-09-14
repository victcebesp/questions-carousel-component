import MinimumGreaterThanMaximumException from "../exceptions/minimumGreaterThanMaximumException"
import RangeValidation from "../validations/rangeValidation"

test("Number inside the range returns true", () =>
  expect(new RangeValidation(1, 10).validate("5")).toBeTruthy())

test("Number equal to maximum returns true", () =>
  expect(new RangeValidation(1, 10).validate("10")).toBeTruthy())

test("Number equal to minimum returns true", () =>
  expect(new RangeValidation(1, 10).validate("1")).toBeTruthy())

test("Number out of range returns false", () =>
  expect(new RangeValidation(1, 10).validate("11")).toBeFalsy())

test("Number out of range returns ", () => {
  const createRangeValidation = () => {
    new RangeValidation(10, 1)
  }
  expect(createRangeValidation).toThrow(MinimumGreaterThanMaximumException)
})
