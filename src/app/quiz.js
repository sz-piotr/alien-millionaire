import quizHtml from './quiz.html'
import questionsDb from './questions.json'

const QUESTIONS_COUNT = 3

export function startQuiz(difficultyLvl) {
  document.getElementById("root").innerHTML = quizHtml

  const answersElement = document.getElementById("quiz-answers")

  const questions = pickQuestions(questionsDb, difficultyLvl)
  const answers = questions[0].answers
  answers.forEach(answer => answersElement.appendChild(toListItem(answer)))
  document.getElementById("quiz-question").innerHTML = questions[0].text + 'asdasd'
}

function toListItem(answer) {
  const li = document.createElement('li')
  const a = document.createElement('a')
  li.appendChild(a)
  a.href = '#'
  a.innerHTML = `${answer.text}, correct: ${answer.correct}`
  return li
}

function pickQuestions(questionsDb, difficultyLvl) {
  questionsDb = questionsDb.slice()

  const pickedQuestions = []
  for(let i = 0; i < QUESTIONS_COUNT; i++) {
    pickedQuestions.push(pickQuestion(questionsDb, difficultyLvl))
  }

  return pickedQuestions.map((question) => ({
    text: question.question,
    answers: shuffle(
      question.answers
        .filter((answer, index) => index < difficultyLvl)
        .map((answer, index) => ({ text: answer, correct: index === 0 }))
    )
  }))
}

function pickQuestion(questionsDb, difficultyLvl) {
  const questionIdx = Math.floor(Math.random() * questionsDb.length)
  const chosenQuestion = questionsDb[questionIdx]
  questionsDb.splice(questionIdx, 1)
  // questionsDb.splice(0, 4)
  return chosenQuestion
}

function shuffle(array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
