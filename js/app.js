'use strict';

console.log('Hello World!');

let userName = prompt('What is your name?');

if(userName === 'Jeremy'){
  document.write('Thank you for testing my code ' + userName);
} else {
  document.write('Thanks for stopping by ' + userName + ', come back soon!');
}
alert('Wow! That\'s such a nice name! Welcome ' + userName + ', would you like to learn a little bit about me? Let\'s play a guessing game!');

let answerOne = prompt('Do I live in San Diego?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  alert('Correct coast, wrong city! I live in Seattle!');
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Correct! I live in Seattle!');
  console.log('Correct! ' + answerOne + ', I live in Seattle');
}

let answerTwo = prompt('Am I half Filipino?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('Yes! I got it from my mama!');
  console.log('Correct! ' + answerTwo + ', I am half Filipino and half German');
} else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('Actually, I am! The other half is German.');
}

let answerThree = prompt('Am I 37?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  alert('Wrong! 10 years too much!');
} else if(answerThree === 'no' || answerThree === 'n'){
  alert('How did you know?! I am 27 years old');
  console.log('Correct! ' + answerThree + ', I am 27 years old');
}

let answerFour = prompt('Do I work in the dental field?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  alert('Unfortunately that is correct, hopefully for not too much longer!');
  console.log('Correct! ' + answerFour + ', I am a dental hygienist');
} else if(answerFour === 'no' || answerFour === 'n'){
  alert('Incorrect, I am a dental hygienist! But not for long!');
}

let answerFive = prompt('Do I have any brothers?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  alert('Nope! It\'s just me and my older sister!');
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('You\'re a great guesser! I have an older sister named Rachel!');
  console.log('Correct! ' + answerFive + ', I have one sister');
}
