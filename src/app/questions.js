import questions from './questions.txt'

export default questions.split('\n')
  .reduce(function(questions, item, index) {
    if(index % 6 === 0) {
      questions.push({
        question: item,
        answers: []
      })
    } else if(index % 6 < 5) {
      questions[Math.floor(index / 6)].answers.push(item)
    }
    return questions
  }, [])
