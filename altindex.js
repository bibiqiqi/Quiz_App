////////////generates the current question and multiple choice answers, with the current question number and the current score displayed, and renders it in the DOM ///////////////
'use strict';

///callback function
function generateQuestionAndAnswers(number, index) {
    ////passing the questionNumber, and indexNumber as arguments into this function to plug them into an html string that will be passed to the renderQuestionsAndAnswers function
    return `
      <div class="question-${number}">  
        <h2>${questionsAndAnswers[index].question}</h2>
      </div>  
      <div class="answers">
        <div>
          <input type="radio" name="question-${number}-answers" id="question-${number}-answers-A" value="A" />
          <label for="question-${number}-answers-A">A) ${questionsAndAnswers[index].a}</label>
        </div>
        <div>
          <input type="radio" name="question-${number}-answers" id="question-${number}-answers-B" value="B" />
          <label for="question-${number}-answers-B">B) ${questionsAndAnswers[index].b}</label>
         </div>
         <div>
          <input type="radio" name="question-${number}-answers" id="question-${number}-answers-C" value="C" />
          <label for="question-${number}-answers-C">C) ${questionsAndAnswers[index].c}</label>
         </div>
         <div>
          <input type="radio" name="question-${number}-answers" id="question-${number}-answers-D" value="D" />
          <label for="question-${number}-answers-D">D) ${questionsAndAnswers[index].d}</label>
         </div>
        </div>
        <div class="bottom">
          <p>${number}/10</p>
          <button type="submit">Submit</button> 
        </div>
       </div>
    `
    ;
  console.log('`generateQuestionAndAnswers` ran')
}

///master function

function renderQuestionAndAnswers(questionAndAnswersString(number, index)) {
  ////passing generateQuestionAndAnswers as an argument of this function
  ////renders the html string that was generated to the DOM
  console.log('`renderQuestionAndAnswer` ran');
  const currentQuestionAndAnswers = questionAndAnswersString;
  // inserts that HTML into the DOM
  $('.js-current-question').html(currentQuestionAndAnswers);
}

////////////gets the user's answer and the correct answer for that question 
//and determines whether they are the same or different////////////    
    
///callback functions
   
////////////responds to user clicking submit on a question////////////

///callback functions
 

function quizStart() {
//listens for user to click on start button, then hides the start page, and exposes the middle-pages template
  $(".js-first-page").on("click", "button", function(event) {
    $( ".js-first-page" ).addClass("hidden");
    $( ".js-middle-pages" ).removeClass("hidden");
    });
}

function doAQuestion(number, index) {
//calling the renderQuestionsAndAnswers function, with generateQuestionAndAnswers passed as an argument, to render the current question to the DOM
  renderQuestionAndAnswers(generateQuestionAndAnswers);
  //listens for the user to click on the submit button for the question
//  $(".js-middle-pages").on("click", "button", function(event) {
//then calls the function afterUserClicksSubmit, passing hasUserSelectedAnswer and isUsersAnswerCorrect as arguments       
//    if ((afterUserClicksSubmit (hasUserSelectedAnswer (number)), isUsersAnswerCorrect(number, index)) === true) {
//^this is like a function inception and it hurts my brain to read it
//if the afterUserClicksSubmit function returns true, they've selected a correct answer, and the "correct answer" feedback page will be on top until the user interacts with it. if it returns false, they've selected an incorrect asnwer, and the "incorrect answer" feedback page will be revealed until the user interacts with it.  
//      feedbackCorrect();
//    }
//   else {
//      feedbackIncorrect();
//    }
//listens for the user to click the "next" button the feedback page, then travels up the DOM, looking for the closest parent div, to hide it 
   
// endFeedbackPage();
//increment the questionNumber variable
//  questionNumber++;
  }


//this function is the main "timeline" function that progresses through the quiz, listening for the user's interactions with the quiz, and then calls all the previous functions
function quizProgression () {
////array of objects that stores all the questions and multiple choices, and the corresponding correct answer
const questionsAndAnswers = [
//question 1  
   {
   question: "Roughly how many species of organisms of the kingdom Fungi have been identified, so far?", 
   a: "2 Million",
   b: "37,000",
   c: "58,000",
   d: "73,000",
   answer: "D"
  },
//question 2 
   {
   question: "The process of specifically using mushrooms to break down toxic chemicals and sequester heavy metals is known as:", 
   a: "Bioremediation",
   b: "Mushremediation",
   c: "Mycoremediation",
   d: "Chitinremediation",
   answer: "B"  
  },
//question 3
   {
   question: "The above-ground part of the mushroom that we typically associate with a mushroom is only a small part of the whole organism, as most of it is underground. What is the primary role of this part of the whole organism?", 
   a: "Nutrient Absorption",
   b: "Protection",
   c: "Sexual Reproduction",
   d: "Oxygen Absorption",
   answer: "C"  
  },
//question 4    
  {
   question: "What Is the primary role of a mushroom’s underground mycelium?", 
   a: "Nutrient Absorption",
   b: "Anchoring",
   c: "Asexual Reproduction",
   d: "Protection",
   answer: "A"  
  },
//question 5 
  {
   question: "The largest living organism on earth is thought to be a mushroom (the honey fungus) and it is estimated to be what distance across? ", 
   a: "0.5 mile",
   b: "2.4 miles",
   c: "8 miles",
   d: "0.7 mile",
   answer: "B"  
  },
//question 6    
  {
   question: "Which one of the following are not a type of fungus?", 
   a: "Mold",
   b: "Yeast",
   c: "The organism that causes the skin infection known as athlete’s foot",
   d: "Lichen",
   answer: "D"  
  },
//question 7
  {
   question: "Due to mycelium’s characteristic of forming strong fibrous mats that bond together to make a solid and flexible material, some people are calling it “the new ____”", 
   a: "Fabric",
   b: "Concrete",
   c: "Plastic",
   d: "Steel",
   answer: "C"  
   },
//question 8
   {
   question: "When mushrooms that have psilocybin in it, are ingested, the body converts it into psilocin. This compound closely resembles the structure of which neurotransmitter?",
   a: "Serotonin",
   b: "Dopamine",
   c: "GABA",
   d: "Norepinephrine",
   answer: "A"  
  },
//question 9
  {
   question: "Which ones of these are related to fungus??",
   a: "MRSA (flesh-eating disease)",
   b: "The Irish Potato Famine",
   c: "Penicillin",
   d: "The Black Death",
   answer: "C"  
  },
//question 10
  {
   question: "Gasteromycetes, the group of mushrooms that release their spores as brown clouds above their fruiting bodies are commonly known as:",
   a: "Atom Bombs",
   b: "Cloud Makers",
   c: "Puffballs",
   d: "Squeezeballs",
   answer: "C"  
  }
];
  
//actual question number, 1-10 
  let questionNumber = 0;
//index number for accessing object in the questionsAndAnswers array, 0-9
  let questionIndex = questionNumber-1;
  
  //first page
  quizStart();
  
doAQuestion(questionNumber, questionIndex);    
  //run the doAQuestion function 10 times 
//  if (questionNumber < 10) {
//    doAQuestion(questionNumber, questionIndex)
//  } 
//  else { 
////after last feedback page is run, results page is shown
//  quizResults();
}
  
///listens for user to select the "take the quiz again" button 
//  quizStartOver();
//    }                          
//  }                            
//}
quizProgression();