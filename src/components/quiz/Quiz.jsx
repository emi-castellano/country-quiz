import React, { useState } from 'react'
import QuestionCard from '../question-card/QuestionCard'
import ResultsCard from '../results-card/ResultsCard'

const Quiz = ({ questions, resetGame }) => {
  const [activeQuestion, setActiveQuestion] = useState(questions[0])
  const [resultsScreen, showResultsScreen] = useState(false)
  const [score, setScore] = useState(0)

  const question = {
    type: activeQuestion.questionType,
    text: activeQuestion.questionType === 'CAPITAL' ? `${activeQuestion.correctAnswer.capital} is the capital of:` : 'Which country does this flag belong to?',
    flag: activeQuestion.questionType === 'FLAG' ? activeQuestion.correctAnswer.flag : undefined,
    options: activeQuestion.options,
    correctAnswer: activeQuestion.correctAnswer.name
  }

  const goToNextQuestion = _ => {
    const activeQuestionIndex = questions.indexOf(activeQuestion)
    if (activeQuestionIndex === questions.length - 1) {
      showResultsScreen(true)
    } else {
      setActiveQuestion(questions[activeQuestionIndex + 1])
    }
  }

  const reset = _ => {
    showResultsScreen(false)
    resetGame()
  }

  return <div className="quiz-wrapper">
    {resultsScreen 
      ? <ResultsCard score={score} resetGame={reset} /> 
      : <QuestionCard question={question} goToNextQuestion={goToNextQuestion} updateScore={num => setScore(score + num)} />
    }
  </div>
}

export default Quiz


