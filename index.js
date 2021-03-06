// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 is set equal to a function returned from counterMaker() which has the
 * count variable declared in it(function level scope), whereas counter2 is a declared function on its own
 * with the count variable declared in the global scope (outisde of the function).
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter2 uses a closure because it has the variable count declared outside of it, but it is still able to
 * access it in its lexical environment. counter1 is set to the returned function of counter(), which does use 
 * a closure, but counter1 itself technically does not...?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 would be preferable in situations where you don't want to store your incremented count at the global
 * scope, instead it can be stored in counterMaker and ran inside that block. counter2 would be better in situations
 * where you would need to store your incremented count at the global scope.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  
    let score =  Math.floor(Math.random() * 3);
    return score;

}

console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

 function finalScore(callback, num){
  console.log(callback());
  let home = 0;
   let away = 0;
   console.log(home);
   console.log(away);
   for (let i = 0; i < num; i++) {
     home = home + callback();
     
     away = away + callback();
     
    }
    let runs = {
      Home : home,
      Away : away,
    };
    return runs;
 }
console.log(finalScore(inning, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(callback, num) {
  let home = 0;
   let away = 0;
  for (let i = 1; i < num; i++) {
    home = home + callback();
     
     away = away + callback();
    if(i === 1) {
      console.log(i + "st inning: " + home +  " - " + away);
    } else if(i === 2) {
      console.log(i + "nd inning: " + home +  " - " + away);
    } else if(i === 3) {
      console.log(i + "rd inning: " + home +  " - " + away);
    } else {
    console.log(i + "th inning: " + home +  " - " + away);
    }
  }
  console.log("Final score: " + home + " - " + away);
}

scoreboard(inning, 10);
