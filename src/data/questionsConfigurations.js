const questionsConfigurations = [
  {
    id: 0,
    questionLabel: "How old are you?",
    answerType: "Integer",
    askingConditions: [],
    answerValidationsSpecifications: [
      {
        type: "Range",
        maximum: 65,
        minimum: 18,
      },
    ],
  },
  {
    id: 1,
    questionLabel: "What is your first name?",
    answerType: "String",
    askingConditions: [],
    answerValidationsSpecifications: [
      {
        type: "Length",
        maximum: 15,
      },
    ],
  },
  {
    id: 2,
    questionLabel: "Do you have a significant other?",
    answerType: "DropDown",
    dropDownOptions: ["True", "False"],
  },
  {
    id: 3,
    questionLabel: "What is your significant other's name?",
    answerType: "String",
    askingConditions: [
      {
        question: 2,
        answer: "True",
      },
    ],
    answerValidationsSpecifications: [],
  },
]

export default questionsConfigurations
