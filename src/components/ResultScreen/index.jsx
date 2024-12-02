import React from 'react';
import './styles.css';

function ResultScreen({ player, quiz }) {
  const unlockedCharacter = player.unlockedCharacters[0]; 

  const isAllCorrect = quiz.score /10 === quiz.questions.length; 
  console.log(quiz.score);
  console.log(quiz.questions.length);
  const isAllIncorrect = quiz.score === 0; 

  return (
    <div className="result-screen">
      <div className="resultsInfo">
        <h1>Resultados</h1>
        <p>Felicidades, {player.name}!</p>
        <p>Tu puntuación: {quiz.score}</p>
        <h2>Feedback</h2>
        {isAllCorrect && <p>¡Lo hiciste perfectamente! Todas las respuestas fueron correctas.</p>}
        {isAllIncorrect && <p className="feedback-empty">Parece que necesitas estudiar más... ¡No hay respuestas correctas!</p>}
        <div className="feedback-list">
          {!isAllCorrect && !isAllIncorrect && quiz.feedback.map((item, index) => (
            <li key={index}>
              {item.question} - Respuesta Correcta: {item.correct}
            </li>
          ))}
        </div>
      </div>
      <div className="unlockedCharacter">
        <h2>Personaje Desbloqueado!</h2>
        {unlockedCharacter && (
          <div className="character-card">
            <img src={unlockedCharacter.image} alt={unlockedCharacter.name} />
            <h3>{unlockedCharacter.name}</h3>
            <p>Estado: {unlockedCharacter.status}</p>
            <p>Especie: {unlockedCharacter.species}</p>
            <p>Origen: {unlockedCharacter.origin.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultScreen;