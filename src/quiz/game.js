import { useState } from "react";
import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trvia-item";
import triviaData from "./trivia-data";

/*
The game is responsible for orchestrating
the flow of the quiz game.
*/
function Game() {
  const [gameState, SetGameState] = useState({
    score: 0,
    triviaIndex: 0,
    difficulty: "",
    isGameOver: false,
  });

  const { score, triviaIndex, difficulty, isGameOver } = gameState;
  const questionNumber = triviaIndex + 1;
  const numQuestions = triviaData.length;
  const diffY= difficulty;

  const restartGame = () => {
    SetGameState({
      score: 0,
      triviaIndex: 0,
      difficulty: "",
      IsGameOver: false,
    });
  };

  const loadNextQuestion = () => {
    if (triviaIndex >= triviaData.length - 1) {
      SetGameState({ ...gameState, isGameOver: true });
    } else {
      SetGameState({
        ...gameState,
        triviaIndex: triviaIndex + 1,
      });
    }
  };

  const onAnswerSelected = (wasPlayerCorrect) => {
    if (wasPlayerCorrect) {
      SetGameState({
        ...gameState,
        score: score + 1 | score + 2 | score + 3,
      });
    }
  };

  let pageContent;
  if (isGameOver) {
    pageContent = (
      <EndScreen score={score} bestScore={0} onRetryClick={restartGame} />
    );
  } else {
    const triviaQuestion = triviaData[triviaIndex];
    const { correct_answer, incorrect_answers, question, difficulty} = triviaQuestion;
    pageContent = (
      <TriviaItem
        key={triviaIndex}
        difficulty = {difficulty}
        question={question}
        correctAnswer={correct_answer}
        incorrectAnswers={incorrect_answers}
        onNextClick={loadNextQuestion}
        onAnswerSelected={onAnswerSelected}
      />
    );
  }

  return (
    <>
      <Stats
        score={score}
        QuestionNumber={questionNumber}
        totalQuestions={numQuestions}
        difficulty = {difficulty}
      />
      {pageContent}
    </>
  );
}

export default Game;
