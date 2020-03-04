var questions = [
  {
    "question": "Did you drink a Corona beer recently?",
    "answers": {
      "yes": "go drink another beer",
      "no": "go drink a beer"
    }
  },
  {
    "question": "Did you lick a subway pole recently?",
    "answers": {
      "yes": "what the hell is wrong with you?",
      "no": "keep up the good hygene"
    }
  }
];

questionNum = Math.floor(Math.random() * questions.length);

function render() {
  document.getElementById("question").innerHTML = questions[questionNum]["question"];
}

function answer(response) {
  document.getElementById("main").innerHTML = questions[questionNum]["answers"][response];
}
