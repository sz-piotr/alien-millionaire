import questionsText from './questions.txt'
import { unique, extractWord } from './utils'

const questions = questionsText.split(/\n\s*\n/)
  .map(question => {
    const rows = question.split('\n')
    return {
      text: rows[0],
      answers: rows.slice(1, 5)
        .map((answer, i) => ({ text: answer, correct: i === 0 })),
      words: question.split(/\s/)
        .map(extractWord)
        .filter(word => word !== '')
        .filter(unique)
    }
  })

export default questions
