import AlphabeticValidation from "../validations/alphabeticValidation"
test("Empty string should returns false", () =>
  expect(new AlphabeticValidation().validate("")).toBeFalsy())

test("String with only spaces returns false", () =>
  expect(new AlphabeticValidation().validate("    ")).toBeFalsy())

test("String containing only numbers returns false", () =>
  expect(new AlphabeticValidation().validate("12332")).toBeFalsy())

test("String containing letters and numbers returns false", () =>
  expect(new AlphabeticValidation().validate("Victor12332")).toBeFalsy())

test("String containing only letters returns true", () =>
  expect(new AlphabeticValidation().validate("Victor")).toBeTruthy())

test("String containing letters and spaces returns false", () =>
  expect(new AlphabeticValidation().validate("Victo r")).toBeFalsy())
