var questions = [
  {
    "question": "Did you drink a Corona beer recently?",
    "answers": {
      "yes": "Go drink another beer!",
      "no": "Go drink a beer."
    }
  },
  {
    "question": "Did you lick a subway pole recently?",
    "answers": {
      "yes": "What the hell is wrong with you?",
      "no": "Keep up the good hygene!"
    }
  },
  {
    "question": "Have you gargled with bleech recently?",
    "answers": {
      "yes": "Try a Tidepod chaser.",
      "no": "That's no way to earn a Darwin Award."
    }
  },
  {
    "question": "Have you recently been to Italy recently?",
    "answers": {
      "yes": "I hope you got some good pictures.",
      "no": "There's always next year."
    }
  },
];

questionNum = Math.floor(Math.random() * questions.length);

function render() {
  document.getElementById("question").innerHTML = questions[questionNum]["question"];
}

function answer(response) {
  diagnosis = [ "Congratulations, you don't have corona virus.  ", "I'm sorry, you have corona virus.  " ][Math.floor(Math.random() * 2)]
  document.getElementById("main").innerHTML = "<p>" + diagnosis + "</p><p>" + questions[questionNum]["answers"][response] + "</p>";
}
