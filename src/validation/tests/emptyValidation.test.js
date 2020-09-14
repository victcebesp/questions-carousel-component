import EmptyValidation from "../validations/emptyValidation"

test("Not empty string returns true", () =>
  expect(new EmptyValidation().validate("foo")).toBeTruthy())

test("Empty string returns false", () =>
  expect(new EmptyValidation().validate("")).toBeFalsy())
