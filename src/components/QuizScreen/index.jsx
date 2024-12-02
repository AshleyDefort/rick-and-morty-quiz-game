import React, { useState } from 'react';
import './styles.css';

function QuizScreen({ quiz, onEnd }) {
  const [currentQuestion, setCurrentQuestion] = useState(quiz.getCurrentQuestion());

  const handleAnswer = (answer) => {
    quiz.answerQuestion(answer);

    if (quiz.isFinished()) {
      onEnd();
    } else {
      setCurrentQuestion(quiz.getCurrentQuestion());
    }
  };

  return (
    <div className="quiz-screen">
      <h2>{currentQuestion.questionText}</h2>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizScreen;
