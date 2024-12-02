class Quiz {
  constructor(questions, characters) {
    this.questions = questions; 
    this.characters = characters; 
    this.currentQuestionIndex = 0; 
    this.player = null; 
  }

  setPlayer(player) {
    this.player = player; 
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex]; 
  }

  answerQuestion(answer) {
    const currentQuestion = this.getCurrentQuestion();
    if (currentQuestion.isCorrectAnswer(answer)) {
      this.player.increaseScore(10); 
      const characterToUnlock = this.characters[this.currentQuestionIndex];
      if (characterToUnlock) {
        this.player.unlockCharacter(characterToUnlock); 
      }
    }
    this.currentQuestionIndex++;
  }

  isFinished() {
    return this.currentQuestionIndex >= this.questions.length; 
  }
}