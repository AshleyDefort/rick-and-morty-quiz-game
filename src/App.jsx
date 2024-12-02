import './App.css'
import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import questionsData from './utils/questions.json'; 
import { fetchCharacters } from './utils/api';
import Player from './models/Player';
import Question from './models/Question';
import Quiz from './models/Quiz';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomQuestions(questions, numQuestions = 10) {
  const shuffledQuestions = shuffleArray([...questions]);
  return shuffledQuestions.slice(0, numQuestions);
}
function App() {
  const [step, setStep] = useState(1);
  const [player, setPlayer] = useState(null);
  const [quiz, setQuiz] = useState(null); 

  const handleStart = (name) => {
    const playerInstance = new Player(name);
    const randomQuestions = getRandomQuestions(questionsData);
    const questionInstances = randomQuestions.map((q) => {
      const shuffledOptions = shuffleArray([...q.options]); 
      return new Question(q.questionText, shuffledOptions, q.correctAnswer);
    });
    console.log(questionInstances);
    const quizInstance = new Quiz(questionInstances);

    setPlayer(playerInstance);
    setQuiz(quizInstance);
    setStep(2);
  };

  const handleQuizEnd = async () => {
    const characters = await fetchCharacters();
    const unlockedCharacter = characters[Math.floor(Math.random() * characters.length)];
    player.unlockCharacter(unlockedCharacter);
    setStep(3); 
  };

  return (
    <div className="App">
      {step === 1 && <StartScreen onStart={handleStart} />}
      {step === 2 && <QuizScreen quiz={quiz} onEnd={handleQuizEnd} />}
      {step === 3 && (
        <ResultScreen player={player} quiz={quiz} />
      )}
    </div>
  );
}

export default App;
