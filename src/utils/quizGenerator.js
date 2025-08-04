// src/utils/quizGenerator.js

export const generateQuizQuestions = (flashcards) => {
  return flashcards.map((card) => {
    const wrongOptions = generateWrongOptions(card.answer);

    return {
      question: card.question,
      options: shuffleOptions([card.answer, ...wrongOptions]),
      correctAnswer: card.answer,
    };
  });
};

const generateWrongOptions = (correctAnswer) => {
  return [
    "Option A",
    "Option B",
    "Option C"
  ];
};

const shuffleOptions = (options) => {
  return options.sort(() => Math.random() - 0.5);
};
