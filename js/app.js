'use strict';

let userName = prompt('What is your name?');
let score = 0;

if(userName === 'Jeremy'){
  document.write('Thank you for testing my code ' + userName);
} else {
  document.write('Thanks for stopping by ' + userName + ', come back soon!');
}
alert('Wow! That\'s such a nice name! Welcome ' + userName + ', would you like to learn a little bit about me? Let\'s play a guessing game!');

function questionOne(){
  let answerOne = prompt('Do I live in San Diego?').toLowerCase();

  if(answerOne === 'yes' || answerOne === 'y'){
    alert('Correct coast, wrong city! I live in Seattle!');
  } else if(answerOne === 'no' || answerOne === 'n'){
    alert('Correct! I live in Seattle!');
    score = score+1;
    console.log('Correct! ' + answerOne + ', I live in Seattle');
  }
}

questionOne();

function questionTwo(){
  let answerTwo = prompt('Am I half Filipino?').toLowerCase();

  if(answerTwo === 'yes' || answerTwo === 'y'){
    alert('Yes! I got it from my mama!');
    score = score+1;
    console.log('Correct! ' + answerTwo + ', I am half Filipino and half German');
  } else if(answerTwo === 'no' || answerTwo === 'n'){
    alert('Actually, I am! The other half is German.');
  }
}

questionTwo();

function questionThree(){
  let answerThree = prompt('Have I always lived in Washington?').toLowerCase();

  if(answerThree === 'yes' || answerThree === 'y'){
    alert('Yup! Born and raised in Eastern Washington!');
  } else if(answerThree === 'no' || answerThree === 'n'){
    alert('Nope! Maybe someday!');
    score = score+1;
    console.log('Correct! ' + answerThree + ', I am 27 years old');
  }
}

questionThree();


function questionFour(){
  let answerFour = prompt('Do I work in the dental field?').toLowerCase();

  if(answerFour === 'yes' || answerFour === 'y'){
    alert('Unfortunately that is correct, hopefully for not too much longer!');
    score = score+1;
    console.log('Correct! ' + answerFour + ', I am a dental hygienist');
  } else if(answerFour === 'no' || answerFour === 'n'){
    alert('Incorrect, I am a dental hygienist! But not for long!');
  }
}

questionFour();

function questionFive(){
  let answerFive = prompt('Do I have any brothers?').toLowerCase();

  if(answerFive === 'yes' || answerFive === 'y'){
    alert('Nope! It\'s just me and my older sister!');
  } else if(answerFive === 'no' || answerFive === 'n'){
    alert('You\'re a great guesser! I have an older sister named Rachel!');
    score = score+1;
    console.log('Correct! ' + answerFive + ', I have one sister');
  }
}

questionFive();

function questionSix(){
  let answerSix = prompt('Guess what number I am thinking of 1-50! You get 5 guesses!');
  let myNumber = 28;
  let attempts = 3;

  for(let i=0; i <= attempts; i++){
    while(+answerSix < 1 || +answerSix > 50){
      answerSix = prompt('Remember, stay between 1 and 50!');
    }
    if(+answerSix === myNumber){
      alert('Wow! Are you psychic?!');
      score = score+1;
      break;
    } else if (+answerSix > myNumber){
      answerSix = prompt('Too high! Guess again!');
    } else if (+answerSix < myNumber){
      answerSix = prompt('Too low! Guess again!');
    }
    if (i === attempts){
      alert('The correct answer was ' + myNumber);
    }
  }
}

questionSix();

function questionSeven(){
  let food = ['steak', 'crab', 'pasta', 'tacos', 'ramen', 'cookies', 'salmon', 'hummus', 'popcorn', 'potatoes'];

  for(let attempts = 0; attempts < 6; attempts++){
    let answerSeven = prompt('Guess what one of my top 10 favorite foods are! You get 6 guesses!').toLowerCase();
    for(let i = 0; i < food.length; i++){
      if(answerSeven === food[i]){
        alert('Correct! Just thinking about it makes me hungry!');
        attempts = 6;
        score = score+1;
        break;
      }
    }
  }
  alert('These are my top 10 favorite foods: ' + food);
}

questionSeven();

alert(` Your score is ${score} out of 7!`);
