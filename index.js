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
  ////passing generateQuestionAndAnswers as an argument of this function
  ////renders the html string that was generated to the DOM
  alert(questionsAndAnswers[10].currentQuestionNumber);
  let questionNumber = questionsAndAnswers[10].currentQuestionNumber;
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

function getCorrectAnswer() {
  let correctAnswer = questionsAndAnswers[questionsAndAnswers[10].currentQuestionNumber-1].answerLetter;
  console.log('getCorrectAnswer ran');
  alert(correctAnswer);
  return correctAnswer;
}

function getUsersAnswer() {
  event.preventDefault();
  //the value of userAnswer is retrieved from the radio button that has a checked attribute
  let usersAnswer = document.querySelector(`input[name=answers]:checked`).value;
  alert(usersAnswer);
  console.log('getUsersAnswer ran');
  return usersAnswer;
}

function doTheQuestions() {
  //takes values from questionsAndAnswers and re in the DOM
//event listener, waiting for user to select "submit" button for current question
  $('.js-question-submit').on("click", function(event) {
//if user's answer is equal to the correct answer, reveal the "correct" feedback page, increment the value of the currentQuestionNumber variable
  if (getCorrectAnswer(questionsAndAnswers[10].currentQuestionNumber)===getUsersAnswer(questionsAndAnswers[10].currentQuestionNumber)) {
    feedbackCorrect();
    endFeedbackCorrect();
    //$(".js-correct-fb-submit").on("click", function(){
    //  $(".js-correct-fb").addClass('hidden');
    //  questionsAndAnswers[10].currentQuestionNumber++;
    //  alert(questionsAndAnswers[10].currentQuestionNumber);
    //  if(questionsAndAnswers[10].currentQuestionNumber == questionsAndAnswers.length) {
    //    quizResults();
    //  } else {
    //    renderQuestionAndAnswers();
    //  }
    //});
  }
  //otherwise, reveal the "incorrect" feedback page with the correct answer, increment the value of the currentQuestionNumber variable
  else {
    feedbackIncorrect();
    endFeedbackIncorrect();
    //$(".js-incorrect-fb-submit").on("click", function(){
    //  $(".js-incorrect-fb").addClass('hidden');
    //  questionsAndAnswers[10].currentQuestionNumber++;
    //  alert(questionsAndAnswers[10].currentQuestionNumber);
    //  if(questionsAndAnswers[10].currentQuestionNumber == questionsAndAnswers.length) {
    //    quizResults();
    //  } else {
    //    renderQuestionAndAnswers();
    //  }
    //});
    }
  });
}

function feedbackCorrect() {
//exposes the correct-answer feeback page, when the user answers a question correctly
  $( ".js-correct-fb" ).removeClass("hidden");
  console.log('feedbackCorrect ran');
}

function endFeedbackCorrect(){
  $(".js-correct-fb-submit").off();
  $(".js-correct-fb-submit").on("click", function(){
    $(".js-correct-fb").addClass('hidden');
    questionsAndAnswers[10].currentQuestionNumber++;
    alert(questionsAndAnswers[10].currentQuestionNumber);
    if(questionsAndAnswers[10].currentQuestionNumber == questionsAndAnswers.length) {
      quizResults();
    } else {
      renderQuestionAndAnswers();
    }
  });
}

function feedbackIncorrect() {
//exposes the incorrect-answer feeback page, with the correct answer, when the user answers a question incorrectly
  $( ".js-incorrect-fb" ).removeClass("hidden");
  let correctAnswer = questionsAndAnswers[questionsAndAnswers[10].currentQuestionNumber-1].answer;

  $('.js-correct-answer').html(correctAnswer);
  console.log('feedbackIncorrect ran');
}

function endFeedbackIncorrect(){
  $(".js-incorrect-fb-submit").off();
  $(".js-incorrect-fb-submit").on("click", function(){
    $(".js-incorrect-fb").addClass('hidden');
    questionsAndAnswers[10].currentQuestionNumber++;
    alert(questionsAndAnswers[10].currentQuestionNumber);
    if(questionsAndAnswers[10].currentQuestionNumber == questionsAndAnswers.length) {
      quizResults();
    } else {
      renderQuestionAndAnswers();
    }
  });
}
//function endFeedbackPage(classToEnd) {
//    $(classToEnd).addClass('hidden');
//    console.log('endFeedbackpage ran');
//}

function quizResults() {
//this will be called once the user has gone through all 10 questions. it hides the question and answer pages and exposes the results-page
 $( ".js-middle-pages" ).addClass("hidden");
 $( ".js-results-pages" ).removeClass("hidden");
    console.log('`quizEnd` ran');
}

quizStart();
doTheQuestions();
