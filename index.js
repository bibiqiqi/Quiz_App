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
    c: "The organism that causes the skin infection known as athlete’s foot",
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

function renderQuestionAndAnswers() {
  let questionNumber = questionsAndAnswers[10].currentQuestionNumber;
  let currentScore = questionsAndAnswers[10].currentCorrect;
  let currentQuestion = questionsAndAnswers[questionNumber-1].question;
  let currentAnswerA = questionsAndAnswers[questionNumber-1].a;
  let currentAnswerB = questionsAndAnswers[questionNumber-1].b;
  let currentAnswerC = questionsAndAnswers[questionNumber-1].c;
  let currentAnswerD = questionsAndAnswers[questionNumber-1].d;

  // inserts that HTML into the DOM
  $('.js-current-question').html(currentQuestion);
  $('.js-answer-a').html(currentAnswerA);
  $('.js-answer-b').html(currentAnswerB);
  $('.js-answer-c').html(currentAnswerC);
  $('.js-answer-d').html(currentAnswerD);
  $('.js-current-question-number').html(questionNumber);
  $('.js-current-score').html(currentScore);
}

//function hasUserSelectedAnswer(number){
////takes the number of the current question as an argument, and determines whether user selected an answer or not
//  var radios = document.getElementsByName(`question-${number}-answers`);
//iterates through all the multiple choice answers for current question to look for the checked attribute
//     for (var i = 0; i < radios.length; i++) {
//          if (radios[i].checked) {
//              return true;
//          }
//          else {
//            return false;
//          }
//      }
//    console.log('`hasUserSelectedAnswer` ran');
//}

function generateFirstPage() {
  $('.js-first-page').html(`
      <div class="container">
             <button class="js-start-quiz" type="button">What do you know about fungi?</button>
      </div>
    `);
}

function quizStart() {
  //listens for user to click on start button, then hides the start page, and exposes the middle-pages template
  $('.js-start-quiz').on("click", function(event) {
    $('.js-first-page').addClass('hidden');
    $('.js-middle-pages').removeClass('hidden');
    questionsAndAnswers[10].currentQuestionNumber++;
    renderQuestionAndAnswers();
    console.log('quizStart ran');
  });
}

function didUserAnswer() {
  var chx = document.getElementsByTagName('input');
    for (var i=0; i<chx.length; i++) {
      // If you have more than one radio group, also check the name attribute
      // for the one you want as in && chx[i].name == 'choose'
      // Return true from the function on first match of a checked item
      if (chx[i].type == 'radio' && chx[i].checked) {
        alert("true");
        return true;
      }
    }
    // End of the loop, return false
    alert("false");
    return false;
  }

//  for (i = 1; i < 4; i++) {
//      if (document.querySelector(`input[name=answers]:checked` == true)) {
//          alert("true");
//          return true;
//      }
//      else {
//        alert("false");
//        return false;
//      }
//    }
//  }

//  if (document.querySelector(`input[name=answers]:checked`).length == true) {
       // at least one of the radio buttons was checked
//       alert('true');
//       return true; // allow whatever action would normally happen to continue
//  }
//  else {
       // no radio button was checked
//       alert('false');
//       return false; // stop whatever action would normally happen
//  }
//}

function checkAnswer(userAnswer) {
  let correctAnswer = questionsAndAnswers[questionsAndAnswers[10].currentQuestionNumber-1].answerLetter;
  //let isChecked = $('.answers').is(':checked');
  //alert(isChecked);
  //let usersAnswer = document.querySelector(`input[name=answers]:checked`).value;
  if (didUserAnswer() == false){
    alert('Choose a Question');
  }
  else if (didUserAnswer() == true && userAnswer == correctAnswer) {
    questionsAndAnswers[10].currentCorrect++;
    feedbackCorrect();
    questionsAndAnswers[10].currentQuestionNumber++;
    endFeedbackCorrect();
  }
  else if (didUserAnswer() == true && userAnswer !== correctAnswer) {
    feedbackIncorrect();
    questionsAndAnswers[10].currentQuestionNumber++;
    endFeedbackIncorrect();
  }
  if(questionsAndAnswers[10].currentQuestionNumber == questionsAndAnswers.length) {
    quizResults();
  } else {
    renderQuestionAndAnswers();
  }
}

function generateFeedbackCorrect(){
  $('.js-feedback-pages').html(`
    <div class="correct-answer js-correct-fb">
      <h1 class="js-fb-header">You are correct!</h1>
      <img class="js-fb-img" src="https://imgur.com/xxn76NZ.gif" alt="Picture of Growing Mushroom">
      <button class="js-correct-fb-submit" type="button">Next</button>
    </div>
    `);
}

function feedbackCorrect() {
  $( ".js-feedback-pages" ).removeClass("hidden");
  generateFeedbackCorrect();
  console.log('feedbackCorrect ran');
}

function endFeedbackCorrect(){
  $(".js-correct-fb-submit").off();
  $(".js-correct-fb-submit").on("click", function(){
    $(".js-correct-fb").addClass('hidden');
  });
}

function generateFeedbackIncorrect(){
  $('.js-feedback-pages').html(`
    <div class="incorrect-answer js-incorrect-fb">
        <h1>Incorrect! The correct answer is <span class="js-correct-answer"></span></h1>
        <img src="https://imgur.com/I2ATdbS.gif" alt="Picture of Shrinking Mushroom">
        <button class="js-incorrect-fb-submit" type="button">Next</button>
    </div>
    `);
}

function feedbackIncorrect() {
  $( ".js-feedback-pages" ).removeClass("hidden");
  generateFeedbackIncorrect();
  let correctAnswer = questionsAndAnswers[questionsAndAnswers[10].currentQuestionNumber-1].answer;
  $('.js-correct-answer').html(correctAnswer);
  console.log('feedbackIncorrect ran');
}

function endFeedbackIncorrect(){
  $(".js-incorrect-fb-submit").off();
  $(".js-incorrect-fb-submit").on("click", function(){
    $(".js-incorrect-fb").addClass('hidden');
  });
}

function generateQuizResults(){
  $('.js-results-page').html(`
    <div class="container">
        <header role="banner">
            <h1>You know this much about fungi:</h1>
        </header>
        <main role="main">
            <h2><span class="js-current-score"></span> out of 10 questions</h2>
            <div class="responsive-flex">
                <img src="https://imgur.com/sMp5IJH.gif" alt="Picture of Dancing Mushrooms">
                <button class="js-quiz-again" type="button">Take the<br>Quiz Again?</button>
            </div>
        </main>
    </div>
    `);
}

function quizResults() {
 $( ".js-middle-pages" ).addClass("hidden");
 $( ".js-results-page" ).removeClass("hidden");
 generateQuizResults();
}

function quizAgain() {
  $(".js-quiz-again").on("click", function(){
    $( ".js-results-page" ).addClass("hidden");
    $( ".js-first-page" ).removeClass("hidden");
    questionsAndAnswers[10].currentQuestionNumber=0;
    questionsAndAnswers[10].currentCorrect=0;
  });
}

function doTheQuestions() {
$('.js-question-submit').off();
$('.js-question-submit').on("click", function(event) {
event.preventDefault();

let userAnswer = document.querySelector(`input[name=answers]:checked`).value;
checkAnswer(userAnswer);
  });
}

generateFirstPage();
quizStart();
doTheQuestions();
