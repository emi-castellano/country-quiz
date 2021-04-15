import Quiz from './components/quiz/Quiz'

import './assets/styles/common.scss'

const App = _ => {
  return <div className="main-app">
    <Quiz />
    <span className="footer-text">created by <b>emi-castellano</b> - devChallenges.io</span>
  </div>
}

export default App;
