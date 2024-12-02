class Quiz {
  constructor(questions) {
    this.questions = questions; 
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.feedback = [];
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  answerQuestion(answer) {
    const currentQuestion = this.getCurrentQuestion();
    if (currentQuestion.isCorrectAnswer(answer)) {
      this.score += 10;
    } else {
      this.feedback.push({
        question: currentQuestion.questionText,
        correct: currentQuestion.correctAnswer,
      });
    }
    this.currentQuestionIndex++;
  }

  isFinished() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

export default Quiz;