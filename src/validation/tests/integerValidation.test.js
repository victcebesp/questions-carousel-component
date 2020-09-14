import IntegerValidation from "../validations/integerValidation"

test("String with alphabetics characters returns false", () =>
  expect(new IntegerValidation().validate("foo")).toBeFalsy())

test("Float input using dot returns false", () =>
  expect(new IntegerValidation().validate("1.3")).toBeFalsy())

test("Float input using commas returns false", () =>
  expect(new IntegerValidation().validate("1,3")).toBeFalsy())

test("integer input returns true", () =>
  expect(new IntegerValidation().validate("3")).toBeTruthy())
