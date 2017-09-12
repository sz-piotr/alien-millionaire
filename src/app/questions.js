import questionsText from './questions.txt'
import { unique, extractWord } from './utils'

const questions = questionsText.split(/\n\s*\n/)
  .map(question => {
    const rows = question.split('\n')
    return {
      question: rows[0],
      answers: rows.slice(1),
      words: question.split(/\s/)
        .map(extractWord)
        .filter(word => word !== '')
        .filter(unique)
    }
  })


export default questions
