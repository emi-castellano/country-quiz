import axios from 'axios'
import { isEmpty } from 'lodash' 

const QUESTION_TYPE = {
  CAPITAL: 'CAPITAL', 
  FLAG: 'FLAG'
}
const numberOfQuestions = 6
const numberOfOptionsForEachQuestion = 4

const getRandomCountry = countries => countries[Math.floor(Math.random() * countries.length)]
const selectCountries = countries => {
  const selectedCountries = []
  const totalAmountOfCountriesNeeded = numberOfQuestions * numberOfOptionsForEachQuestion

  for (let i = 0; i < totalAmountOfCountriesNeeded; i++) {
    if (isEmpty(selectedCountries)) {
      selectedCountries.push(getRandomCountry(countries))
    } else {
      let stopLoop = false
      while (!stopLoop) {
        const randomCountry = getRandomCountry(countries)
        const isDuplicated = selectedCountries.find(value => value === randomCountry)

        if (!isDuplicated) {
          selectedCountries.push(randomCountry)
          stopLoop = true
        }
      }
    }
  }

  return selectedCountries
}

const createCapitalQuestion = selectedCountries => {
  const correctAnswer = selectedCountries[Math.floor(Math.random() * (numberOfOptionsForEachQuestion - 0))]

  return {
    questionType: QUESTION_TYPE.CAPITAL,
    correctAnswer,
    options: selectedCountries.map((v) => v.name),
  }
}

const createFlagQuestion = selectedCountries => {
  const correctAnswer = selectedCountries[Math.floor(Math.random() * (numberOfOptionsForEachQuestion - 0))]

  return {
    questionType: QUESTION_TYPE.FLAG,
    correctAnswer,
    options: selectedCountries.map((v) => v.name)
  }
}

export const createQuestionsAndAnswers = async _ => {
  const { data } = await axios.get('https://restcountries.com/v2/all')
  const countries = selectCountries(data)
  const dividedArray = new Array(Math.ceil(countries.length / numberOfOptionsForEachQuestion)).fill().map(_ => countries.splice(0, numberOfOptionsForEachQuestion))
  const questions = []

  for (let i = 0; i < dividedArray.length; i++) {
    if (i % 2 === 0) {
      questions.push(createCapitalQuestion(dividedArray[i]))
    } else {
      questions.push(createFlagQuestion(dividedArray[i]))
    }
  }

  return questions
}

