import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import Quiz from './components/quiz/Quiz'
import { createQuestionsAndAnswers } from './services/index'

import './assets/styles/common.scss'

const App = _ => {
  const [questions, setQuestions] = useState(null)
  useEffect(() => {
    async function getQuestions() {
      const res = await createQuestionsAndAnswers()
      setQuestions(res)
    }

    getQuestions();
  }, []);

  const resetGame = async _ => {
    const questions = await createQuestionsAndAnswers()
    setQuestions(questions)
  }

  return <div className="main-app">
    {isEmpty(questions) && <h1>Loading questions</h1>}
    {!isEmpty(questions) && <Quiz questions={questions} resetGame={resetGame} />}
    <span className="footer-text">created by <b>emi-castellano</b> - devChallenges.io</span>
  </div>
}

export default App;
