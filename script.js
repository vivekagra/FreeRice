const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var score = 0;
var pictures = ["media/rice0.svg", "media/rice10.svg", "media/rice20.svg", "media/rice30.svg", "media/rice40.svg", "media/rice50.svg", "media/rice60.svg", "media/rice70.svg", "media/rice80.svg", "media/rice90.svg", "media/rice100.svg"];
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  if(score == 0)
  {
    document.documentElement.style.setProperty('--slide','url(media/rice0.svg)')
  }
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(correct)
  {
    score++;
    console.log(score)
    if(score<1)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice0.svg)')
    }
    else if(score==1)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice10.svg)')
    }
    else if(score==2)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice20.svg)')
    }
    else if(score==3)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice30.svg)')
    }
    else if(score==4)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice40.svg)')
    }
    else if(score==5)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice50.svg)')
    }
    else if(score==6)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice60.svg)')
    }
    else if(score==7)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice70.svg)')
    }
    else if(score==8)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice80.svg)')
    }
    else if(score==9)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice90.svg)')
    }
    else if(score>=10)
    {
      document.documentElement.style.setProperty('--slide','url(media/rice100.svg)')
    }
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  }
  else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    score = 0;
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the capital of India?',
    answers: [
      { text: 'Delhi', correct: true },
      { text: 'Mumbai', correct: false },
      { text: 'Jaipur', correct: false },
      { text: 'Agra', correct: false }
    ]
  },
  {
    question: 'What is the capital of Rajasthan?',
    answers: [
      { text: 'Delhi', correct: false },
      { text: 'Mumbai', correct: false },
      { text: 'Jaipur', correct: true },
      { text: 'Agra', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]