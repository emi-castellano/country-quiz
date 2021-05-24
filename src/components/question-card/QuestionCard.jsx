import React, { useState } from 'react'
import PropTypes from 'prop-types'
import quizImage from '../../assets/images/question-image.svg'
import Button, { BUTTON_TYPES } from '../button/Button'
import CancelOutlined from '@material-ui/icons/CancelOutlined'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import classnames from 'classnames'
import './question-card.scss'

const ANSWER_INDEX = ['A', 'B', 'C', 'D']

const QuestionCard = ({ question, goToNextQuestion, updateScore }) => {
  const [isNextButtonVisible, showNextButton] = useState(false)
  const [resultsVisible, showResults] = useState(false)

  const onAnswerClick = selectedOption => {
    showNextButton(true)
    showResults(true)
    updateScore(selectedOption === question.correctAnswer ? 1 : 0)
  }

  const onNextButtonClick = () => {
    showNextButton(false)
    showResults(false)
    goToNextQuestion()
  }

  const renderAnswerItems = () => {
    return <div className="answers-list">
      {question.options.map((answer, index) => {
        let resultsClass = ''
        let resultIcon = null
        const answerIsCorrect = answer === question.correctAnswer
        if (resultsVisible) {
          resultsClass = answerIsCorrect ? 'correct' : 'incorrect'
          resultIcon = answerIsCorrect ? <CheckCircleOutlinedIcon className='answer-icon' /> : <CancelOutlined className='answer-icon' />
        }
        return <button className={classnames('answer', resultsClass)} key={index} onClick={() => onAnswerClick(answer)}>
          <span className="letter">{ANSWER_INDEX[index]}</span>
          <span className="text">{answer}</span>
          {resultIcon}
        </button> 
      })}
    </div>
  }
  const className = classnames('card', question.type.toLowerCase())

  return <div className="card-wrapper">
    <h1>COUNTRY QUIZ</h1>
    <div className={className}>
      <img src={quizImage} alt="Quiz question" className='illustration' />
      {question.flag && <img className='flag-img' src={question.flag} alt="Country flag" />}
      <h3>{question.text}</h3>
      {renderAnswerItems()}
      {isNextButtonVisible && <Button className='next-button' type={BUTTON_TYPES.primary} text='Next' onClick={onNextButtonClick} />}
    </div>
  </div>
}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
  goToNextQuestion: PropTypes.func.isRequired
}

export default QuestionCard
