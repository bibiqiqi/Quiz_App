////array of objects that stores all the questions and multiple choices, and the corresponding correct answer
'use strict';
const questionsAndAnswers = [
  //question 1
  {
    question: "Roughly how many species of organisms of the kingdom Fungi have been identified, so far?",
    a: "2 Million",
    b: "37,000",
    c: "58,000",
    d: "73,000",
    answer: "73,000",
    answerLetter: "d"
  },
  //question 2
  {
    question: "The process of specifically using mushrooms to break down toxic chemicals and sequester heavy metals is known as:",
    a: "Bioremediation",
    b: "Mycoremediation",
    c: "Mushremediation",
    d: "Chitinremediation",
    answer: "Mycoremediation",
    answerLetter: "b"
  },
  //question 3
  {
    question: "The above-ground part of the mushroom that we typically associate with a mushroom is only a small part of the whole organism, as most of it is underground. What is the primary role of this part of the whole organism?",
    a: "Nutrient Absorption",
    b: "Protection",
    c: "Sexual Reproduction",
    d: "Oxygen Absorption",
    answer: "Sexual Reproduction",
    answerLetter: "c"
  },
  //question 4
  {
    question: "What Is the primary role of a mushroom’s underground mycelium?",
    a: "Nutrient Absorption",
    b: "Anchoring",
    c: "Asexual Reproduction",
    d: "Protection",
    answer: "Nutrient Absorption",
    answerLetter: "a"
  },
  //question 5
  {
    question: "The largest living organism on earth is thought to be a mushroom (the honey fungus) and it is estimated to be what distance across? ",
    a: "0.5 mile",
    b: "2.4 miles",
    c: "8 miles",
    d: "0.7 mile",
    answer: "2.4 miles",
    answerLetter: "b"
  },
  //question 6
  {
    question: "Which one of the following are not a type of fungus?",
    a: "Mold",
    b: "Yeast",
    c: '"Athlete’s foot"',
    d: "Lichen",
    answer: "Lichen",
    answerLetter: "d"
  },
  //question 7
  {
    question: "Due to mycelium’s characteristic of forming strong fibrous mats that bond together to make a solid and flexible material, some people are calling it “the new ____”",
    a: "Fabric",
    b: "Concrete",
    c: "Plastic",
    d: "Steel",
    answer: "Plastic",
    answerLetter: "c"
  },
  //question 8
  {
   question: "When mushrooms that have psilocybin in it, are ingested, the body converts it into psilocin. This compound closely resembles the structure of which neurotransmitter?",
    a: "Serotonin",
    b: "Dopamine",
    c: "GABA",
    d: "Norepinephrine",
    answer: "Serotonin",
    answerLetter: "a"
  },
  //question 9
  {
    question: "Which ones of these are related to fungus??",
    a: "MRSA (flesh-eating disease)",
    b: "The Irish Potato Famine",
    c: "Penicillin",
    d: "The Black Death",
    answer: "Penicillin",
    answerLetter: "c"

  },
  //question 10
  {
    question: "Gasteromycetes, the group of mushrooms that release their spores as brown clouds above their fruiting bodies are commonly known as:",
    a: "Atom Bombs",
    b: "Cloud Makers",
    c: "Puffballs",
    d: "Squeezeballs",
    answer: "Puffballs",
    answerLetter: "c"
  },
  //quiz trackers
  {
    currentQuestionNumber: 0,
    currentCorrect: 0
  }
];

//plucks values from the questionsAndAnswers array
function renderQuestionAndAnswers() {
  let questionNumber = questionsAndAnswers[10].currentQuestionNumber;
  let currentScore = questionsAndAnswers[10].currentCorrect;
  let currentQuestion = questionsAndAnswers[questionNumber-1].question;
  let currentAnswerA = questionsAndAnswers[questionNumber-1].a;
  let currentAnswerB = questionsAndAnswers[questionNumber-1].b;
  let currentAnswerC = questionsAndAnswers[questionNumber-1].c;
  let currentAnswerD = questionsAndAnswers[questionNumber-1].d;

// then inserts them into an html template, in the DOM
  $('.js-current-question').html(currentQuestion);
  $('.js-answer-a').html(currentAnswerA);
  $('.js-answer-b').html(currentAnswerB);
  $('.js-answer-c').html(currentAnswerC);
  $('.js-answer-d').html(currentAnswerD);
  $('.js-current-question-number').html(questionNumber);
  $('.js-current-score').html(currentScore);
}

//generates html for the first page
function generateFirstPage() {
  $('.js-first-page').html(`
      <div class="container">
         <h1>What do you know about fungi?</h1>
         <img src="./start_and_end/mushroom_lady.gif" alt="Collage of Woman with Mushrooms in Head">
         <button class="js-start-quiz" type="button">Start Quiz <span>(to find out)</span></button>
      </div>
    `);
}

//listens for user to select start quiz button, then hides first page
//and reveals quiz pages, calling renderQuestionsAndAnswers
function quizStart() {
  $('.js-start-quiz').on("click", function(event) {
    $('.js-first-page').addClass('hidden');
    $('.js-middle-pages').removeClass('hidden');
    questionsAndAnswers[10].currentQuestionNumber++;
    renderQuestionAndAnswers();
    console.log('quizStart ran');
  });
}

//checks user's answer against correct answer, and holds the conditional flow
//of which functions to call, based on whether the user's answer is right
function checkAnswer(userAnswer) {
  let correctAnswer = questionsAndAnswers[questionsAndAnswers[10].currentQuestionNumber-1].answerLetter;
  if (userAnswer == correctAnswer) {
    questionsAndAnswers[10].currentCorrect++;
    feedbackCorrect();
    questionsAndAnswers[10].currentQuestionNumber++;
    endFeedbackCorrect();
  } else {
    feedbackIncorrect();
    questionsAndAnswers[10].currentQuestionNumber++;
    endFeedbackIncorrect();
  }
  if(questionsAndAnswers[10].currentQuestionNumber == questionsAndAnswers.length) {
    quizResults();
    quizAgain();
  } else {
    renderQuestionAndAnswers();
  }
  console.log('checkAnswer ran');
}

//generates html string for the correct-answer feeback div
function generateFeedbackCorrect(){
  $('.js-feedback-pages').html(`
    <div class="container correct-answer js-correct-fb">
      <img class="portrait-grow" src="./answer_responses/cropped_compressed_growing_mushroom.gif" alt="Animation of Growing Mushroom">
      <img class="landscape-grow" src="./answer_responses/compressed_growing_mushroom.gif" alt="Animation of Growing Mushroom">
      <h1>You are correct!</h1>
      <button class="js-correct-fb-submit" type="button">Next</button>
    </div>
    `);
}

//reveals the correct-answer feedback div and calls the generateFeedbackCorrect function
function feedbackCorrect() {
  $( ".js-feedback-pages" ).removeClass("hidden");
  $('.js-middle-pages').addClass('hidden');
  generateFeedbackCorrect();
  console.log('feedbackCorrect ran');
}

//event-listener for user to select the next button to remove the feedback pages
function endFeedbackCorrect(){
  $(".js-correct-fb-submit").off();
  $(".js-correct-fb-submit").on("click", function(){
    $(".js-feedback-pages").addClass('hidden');
    $('.js-middle-pages').removeClass('hidden');
  });
  console.log('endFeedbackCorrect ran');
}

//generates html string for the incorrect-answer feeback div
function generateFeedbackIncorrect(){
  $('.js-feedback-pages').html(`
    <div class="container incorrect-answer js-incorrect-fb">
        <img class="portrait-shrink" src="./answer_responses/cropped_compressed_shrinking_mushroom.gif" alt="Animation of Shrinking Mushroom">
        <img class="landscape-shrink" src="./answer_responses/compressed_shrinking_mushroom.gif" alt="Animation of Shrinking Mushroom">
        <h1>Incorrect! The correct answer is <span class="js-correct-answer"></span></h1>
        <button class="js-incorrect-fb-submit" type="button">Next</button>
    </div>
    `);
}

//reveals the incorrect-answer feedback div and calls the generateFeedbackInorrect function
function feedbackIncorrect() {
  $( ".js-feedback-pages" ).removeClass("hidden");
  $('.js-middle-pages').addClass('hidden');
  generateFeedbackIncorrect();
  let correctAnswer = questionsAndAnswers[questionsAndAnswers[10].currentQuestionNumber-1].answer;
  $('.js-correct-answer').html(correctAnswer);
  console.log('feedbackIncorrect ran');
}

//event-listener for user to select the next button to remove the feedback pages
function endFeedbackIncorrect(){
  $(".js-incorrect-fb-submit").off();
  $(".js-incorrect-fb-submit").on("click", function(){
    $(".js-feedback-pages").addClass('hidden');
    $('.js-middle-pages').removeClass('hidden');
  });
  console.log('endFeedbackIncorrect ran');
}

//generates html string for the results-page div
function generateQuizResults(){
  $('.js-results-page').html(`
    <div class="container">
          <h1>You know this much about fungi:</h1>
          <h2>${questionsAndAnswers[10].currentCorrect} out of 10 questions</h2>
      <img src="./start_and_end/end_mushroom_lady.gif" alt="Collage of Woman with Mushrooms in Head">
      <button class="js-quiz-again" type="button">Take the<br>Quiz Again?</button>
    </div>
  `);
}

//hides the quiz pages and reveals the quiz results, calling generateQuizResults
function quizResults() {
 $(".js-feedback-pages").addClass('hidden');
 $( ".js-middle-pages" ).addClass("hidden");
 $( ".js-results-page" ).removeClass("hidden");
 generateQuizResults();
 console.log ('quizResults ran');
}

//event listener for user to select take quiz again button
//calls the generateFirstPage function again,
function quizAgain() {
  $(".js-quiz-again").on("click", function(){
    $( ".js-results-page" ).addClass("hidden");
    generateFirstPage();
    $( ".js-first-page" ).removeClass("hidden");
    questionsAndAnswers[10].currentQuestionNumber=0;
    questionsAndAnswers[10].currentCorrect=0;
    quizStart()
    console.log ('quizAgain ran');
  });
}

function doTheQuestions() {
  $('.js-question-submit').off();
  $('.js-question-submit').on("click", function(event) {
    event.preventDefault();
    let userAnswer = document.querySelector(`input[name=answers]:checked`).value;
    checkAnswer(userAnswer);
    console.log ('doTheQuestions ran');
});
}

generateFirstPage();
quizStart();
doTheQuestions();
