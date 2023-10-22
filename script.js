const questions = [
     {
          question: 'V jaké ulici bydlí Harry Potter?',
          answers: [
               {text: 'V Zobí', correct: true},
               {text: 'V Temné', correct: false},
               {text: 'V Bloudné', correct: false},
               {text: 'V Soví', correct: false},
          ]
     },
     {
          question: 'Kolik dárků dostal Dudley k narozeninám?',
          answers: [
               {text: '12', correct: false},
               {text: '36', correct: true},
               {text: '37', correct: false},
               {text: '50', correct: false},
          ]
     },
     {
          question: 'Jakého hada Harry pustil v ZOO?',
          answers: [
               {text: 'Kobru', correct: false},
               {text: 'Krajtu', correct: false},
               {text: 'Užovku', correct: false},
               {text: 'Hroznýše', correct: true},
          ]
     },
     {
          question: 'Od koho dostal Rubeus Hagrid létající motorku?',
          answers: [
               {text: 'Od Siriuse Blacka', correct: true},
               {text: 'Od Albuse Brumbála', correct: false},
               {text: 'Od Jamese Pottera', correct: false},
               {text: 'Od Arthura Weasleho', correct: false},
          ]
     },
     {
          question: 'Jaké je číslo trezoru Harryho Pottera?',
          answers: [
               {text: '713', correct: false},
               {text: '711', correct: false},
               {text: '687', correct: true},
               {text: '998', correct: false},
          ]
     },
     {
          question: 'V kolika letech nastupují studenti do školy v Bradavicích?',
          answers: [
               {text: 'V 18', correct: false},
               {text: 'V 11', correct: true},
               {text: 'V 15', correct: false},
               {text: 'V 6', correct: false},
          ]
     },
     {
          question: 'Jak se jmenoval třihlavý pes, který hlídal vchod ke kameni mudrců?',
          answers: [
               {text: 'Tesák', correct: false},
               {text: 'Dráp', correct: false},
               {text: 'Norbert', correct: false},
               {text: 'Chloupek', correct: true},
          ]
     },
     {
          question: 'Koho Minerva McGonagallová vyzve jako prvního, aby si nasadil Moudrý klobouk? ?',
          answers: [
               {text: 'Nevilla Longbottoma', correct: false},
               {text: 'Harryho Pottera', correct: false},
               {text: 'Hermionu Grangerovou', correct: true},
               {text: 'Draca Malfoye', correct: false},
          ]
     },
     {
          question: 'Do jaké koleje chodí Harry Potter??',
          answers: [
               {text: 'Do Mrzimoru', correct: false},
               {text: 'Do Nebelvíri', correct: true},
               {text: 'Do Zmijozelu', correct: false},
               {text: 'Do Havraspáru', correct: false},
          ]
     },
     {
          question: 'Na jakém nástupišti odjíždí vlak do Bradavic?',
          answers: [
               {text: '9¾ ', correct: true},
               {text: '7½', correct: false},
               {text: '3¼', correct: false},
               {text: '9¼', correct: false},
          ]
     },
     {
          question: 'Od koho dostane Harry Potter Nimbus 2000?',
          answers: [
               {text: 'Od Rolandy Hoochové', correct: false},
               {text: 'Od Severuse Snapa', correct: false},
               {text: 'Od Minervy McGonagallové', correct: true},
               {text: 'Od Olivera Wooda', correct: false},
          ]
     },
     {
          question: 'Kdo vlastní Gringotovu banku?',
          answers: [
               {text: 'Zlobři', correct: false},
               {text: 'Trollové', correct: false},
               {text: 'Skřeti', correct: true},
               {text: 'Lidi', correct: false},
          ]
     },
     {
          question: 'Jaké jádro má Harryho hůlka?',
          answers: [
               {text: 'Blánu z dračího srdce', correct: false},
               {text: 'Pero z fénixe', correct: true},
               {text: 'Žíni jednorožce', correct: false},
               {text: 'Vlas víly', correct: false},
          ]
     },
     {
          question: 'V jaké pochutině Harry našel kartičku Albuse Brumbála?',
          answers: [
               {text: 'V Lékořicových žvýkačkách', correct: false},
               {text: 'V Dýnových paštičkách', correct: false},
               {text: 'V Bertíkových fazolkách', correct: false},
               {text: 'V Čokoládové žabce', correct: true},
          ]
     },
     {
          question: 'Kdo vpustil trolla do školy?',
          answers: [
               {text: 'Quirinus Quirrel', correct: true},
               {text: 'Severus Snape', correct: false},
               {text: 'Draco Malfoy', correct: false},
               {text: 'Fred a George Weaslyovi', correct: false},
          ]
     },
     {
          question: 'Jak se jemnuje žabák Nevilla Longbottoma?',
          answers: [
               {text: 'Trevor', correct: true},
               {text: 'Prašivka', correct: false},
               {text: 'Roberto', correct: false},
               {text: 'Herbert', correct: false},
          ]
     },
     {
          question: 'Kdo je duchem Zmijozelu?',
          answers: [
               {text: 'Tlustý mnich', correct: false},
               {text: 'Skoro bezhlavý Nick', correct: false},
               {text: 'Krvavý baron', correct: true},
               {text: 'Šedá dáma', correct: false},
          ]
     },
     {
          question: 'Jaké bylo první heslo do Nebelvírké koleje?',
          answers: [
               {text: 'Citronová zmrzlina', correct: false},
               {text: 'Fortuna Major', correct: false},
               {text: 'Čistá krev', correct: false},
               {text: 'Caput Draconis', correct: true},
          ]
     },
     {
          question: 'Jak se jmenují Malfoyovi kumpáni?',
          answers: [
               {text: 'Marcus Flint a Gregory Goyle', correct: false},
               {text: 'Vincent Crabbe a Gregory Goyle', correct: true},
               {text: 'Blaise Zabini a Marcus Flint', correct: false},
               {text: 'Vincent Crabbe a Blaise Zabini', correct: false},
          ]
     },
     {
          question: 'Co Rubeus Hagrid vyhraje v hodpodě v kartách?',
          answers: [
               {text: 'Dračí vejce', correct: true},
               {text: 'Mládě testrála', correct: false},
               {text: 'Třaskavého skvorejše', correct: false},
               {text: 'Fénixe', correct: false},
          ]
     }
     
]

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-button')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
     currentQuestionIndex = 0
     score = 0
     nextButton.innerHTML = 'Next'
     showQuestion()
}

function showQuestion(){
     resetState()
     let currentQuestion = questions[currentQuestionIndex]
     let questionNo = currentQuestionIndex + 1
     questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

     currentQuestion.answers.forEach(answer => {
          const button = document.createElement('button')
          button.innerHTML = answer.text
          button.classList.add('btn')
          answerButtons.appendChild(button)
          if(answer.correct){
               button.dataset.correct = answer.correct
          }
          button.addEventListener('click', selectAnswer)
     })
}

function resetState(){
     nextButton.style.display = 'none'
     while(answerButtons.firstChild){
          answerButtons.removeChild(answerButtons.firstChild)
     }
}

function selectAnswer(e){
     const selectedBtn = e.target
     const isCorrect = selectedBtn.dataset.correct === 'true'
     if(isCorrect){
          selectedBtn.classList.add('correct')
          score++
     }
     else{
          selectedBtn.classList.add('incorrect')
     }
     Array.from(answerButtons.children).forEach(button => {
          if(button.dataset.correct === 'true'){
               button.classList.add('correct')
               button.classList.add('shake')
          }
          button.disabled = true
     })
     nextButton.style.display = 'block'
}

function showScore(){
     resetState()
     questionElement.innerHTML = `Tvé score je ${score} z ${questions.length}!`
     nextButton.innerHTML = 'Hrát znovu'
     nextButton.style.display = 'block'
}    


function handleNextButton(){
     currentQuestionIndex++
     if(currentQuestionIndex < questions.length){
          showQuestion()
     }
     else{
          showScore()
     }
}

nextButton.addEventListener('click', () => {
     if(currentQuestionIndex < questions.length){
          handleNextButton()
     }
     else{
          startQuiz()
     }
})


startQuiz()


