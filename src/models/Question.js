class Question {
  constructor(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  isCorrectAnswer(answer) {
    return this.correctAnswer === answer;
  }
}

export default Question;