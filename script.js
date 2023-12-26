const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=> Math.random()- .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}
function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer=>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);    
    })
}

function resetState(){
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex+1){
        nextButton.classList.remove('hide');
    }
    else{
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide')
    }
    }
    

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }
    // else{
    //     element.classList.add('wrong');
    // }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'What is the pH value of the human body?',
        answers:[
            {text:'9.2 to 9.8', correct:false},
            {text:'7.0 to 7.8', correct:true},
            {text:'6.1 to 6.3', correct:false},
            {text:'5.4 to 5.6', correct:false}
        ]
    },
    {
        question: 'Which of the following are called "Key Industrial animals"?',
        answers:[
            {text:'Producers', correct:false},
            {text:'Tertiary consumers', correct:false},
            {text:'Primary consumers', correct:true},
            {text:'None of these', correct:false}
        ]
    },
    {
        question: 'Pustaz grasslands are situated at?',
        answers:[
            {text:'South Africa', correct:false},
            {text:'China', correct:false},
            {text:'Hungary', correct:true},
            {text:'USA', correct:false}
        ]
    },
    {
        question: 'Right to emergency medical aid is a?',
        answers:[
            {text:'Legal Right', correct:false},
            {text:'Illegal Right', correct:false},
            {text:'Constitutional Right', correct:false},
            {text:'Fundamental Right.', correct:true}
        ]
    },
    {
        question: 'Chelaiya Samiti is related to which of the following?',
        answers:[
            {text:'Banking sector', correct:false},
            {text:'Insurance sector', correct:false},
            {text:'Health Sector', correct:false},
            {text:'Tax reforms', correct:true}
        ]
    }
]