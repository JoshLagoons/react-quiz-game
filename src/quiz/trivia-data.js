//import he from "he";
let triviaData = [
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "easy",
    question:
      "Deus Ex (2000) does not feature the World Trade Center because it was destroyed by terrorist attacks according to the game's plot.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the hardest possible difficulty in Deus Ex: Mankind Divided?",
    correct_answer: "I Never Asked For This",
    incorrect_answers: ["Nightmare", "Extreme", "Guru"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "Hard",
    question:
      "What Ultimate does Makoto Naegi, protagonist of Danganronpa: Trigger Happy Havoc, have? ",
    correct_answer: "Ultimate Lucky Student",
    incorrect_answers: [
      "Ultimate Unlucky Student",
      "Ultimate Detective",
      "Ultimate Runner",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Call Of Duty: Zombies, what does the game traditionally reward you for completing a boss round?",
    correct_answer: "Max Ammo",
    incorrect_answers: [
      "A Pack-A-Punched gun",
      "Death Machine",
      "Monkey Bombs",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the Portal series, who was Cave Johnson's personal assistant?",
    correct_answer: "Caroline",
    incorrect_answers: ["Heather", "Melissa", "Jane"],
  },
];

//this operation should be done when we retrieve our trivia data from another server
//triviaData = triviaData.map((item) =>{//
//  return{
//    ...item,
//    question: he.decode(item.question),
//    correct_answer: he.decode(item.correct_answer),
//    incorrect_answers: item.incorrect_answers.map((incorrect) => he.decode(incorrect))
//
//
//  };
//
//});

export default triviaData;
