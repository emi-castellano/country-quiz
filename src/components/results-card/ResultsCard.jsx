import resultsImage from '../../assets/images/result-image.svg'
import Button, { BUTTON_TYPES } from '../button/Button'
import './results-card.scss'

const ResultsCard = ({ score, resetGame }) => {
  return <div className='card-wrapper'>
    <h1>RESULTS</h1>
    <div className='card results'>
      <img src={resultsImage} alt='Results' />
      <div className='center-text'>
        <h1>Results</h1>
        <span className='score-text'>You got <span className='score'>{score}</span> correct answers</span>
      </div>
      <Button type={BUTTON_TYPES.secondary} text='Try again' onClick={resetGame} />
    </div>
  </div>
}

export default ResultsCard