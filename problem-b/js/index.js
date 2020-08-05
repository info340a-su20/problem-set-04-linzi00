'use strict';

/* Define a function `addFour()` that takes a single argument 
   and returns a value 4 greater than the input.*/
function addFour(n) {
  return n + 4;
}
   
/* Create and log a variable `twelve` that is the result of passing 8 to your
   addFour() function. */
let twelve = addFour(8);
console.log(twelve);
   
/* Create and log a variable `twelveString` that is the result of passing "8" 
   (a string) to your addFour() function. Consider what this tells you about how
  the function should be explained (e.g., in a comment). */
let twelveString = addFour("8");
/* if the argument is number, this function will return a number with 4 greater than it
   if the argument is string, this function will append a "4" at the end of it */
  

/* Define a function `compoundInterest()` that takes three parameters: 
     1. an initial bank balance (principle, in dollars)
     2. an annual interest rate (as a decimal, e.g., 0.01) 
     3. a number of years
   The function should calculate the continuous compound interest
     (https://en.wikipedia.org/wiki/Compound_interest#Continuous_compounding) 
   and *return* the resulting total balance after that many number of years

   You can call the method and log the result to check your work. Compare to
     http://www.mathwarehouse.com/calculators/continuous-compound-interest-calculator.php
*/
function compoundInterest(initBalance, rate, years) {
  return initBalance * Math.pow(Math.E, rate * years);
}



/* Define a function `fizzBuzz()` that takes in a single number as an argument.
   The function should *return* an _array_ of numbers from 1 to the argument. 
   But for multiples of three, the array should contain "Fizz" instead of the 
   number. For multiples of five, the array should contain "Buzz" instead of the 
   number. For numbers which are multiples of both three and five, the array 
   should contain "FizzBuzz" instead of the number.
   The returned array should be empty for arguments less than 1. */
function fizzBuzz(n) {
  let acc = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      acc.push("FizzBuzz");
    } else if (i % 3 === 0) {
      acc.push("Fizz");
    } else if (i % 5 === 0) {
      acc.push("Buzz");
    } else {
      acc.push(i);
    }
  }
  return acc;
}
   

/* Define a function `getLetterFrequencies()` that takes in a single string as 
   an argument. The function should *return* an Object whose keys are characters
   (letters) and whose values are the number of times that character appears in
   the argument. Your function should be case sensitive.
   _Hint:_ start with an empty Object, then loop through the letters one at a
   time (you can access them with bracket notation, like with an array). For 
   each letter, increase the value associated with that key by one. Watch out 
   for if the letter is not in the Object yet!
   You can test this method with a word like "Mississippi". */
function getLetterFrequencies(s) {
  let acc = {};
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in acc)) {
      acc[s[i]] = 1;
    } else {
      acc[s[i]]++;
    }
  }
  return acc;
}
   

/* Create a variable `deck` that represents a deck of modern playing cards
   (https://en.wikipedia.org/wiki/Playing_card). This variable should be an
   *array* of 52 elements, each of which is an Object with properties:
     - `suit`, with a string value that is either `"hearts"`, `"diamonds"`, 
       `"clubs"`, or `"spades"`
     - `rank`, with an integer value ranging from 2 to 14 inclusive (values 
        11-14 represent a Jack, Queen, King, or Ace respectively).
    Tip: use a pair of nested loops to add each combination of suit and rank to 
    the `deck` array! 
    
    You can log out the `deck` to check your work! */
let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
let deck = [];
for (let suit of suits) {
  for (let rank = 2; rank <= 14; rank++) {
    deck.push({ suit, rank });
  }
}

//You can test the below functions by creating e.g., a `pokerHand` array that 
//contains five cards from the `deck`.

/* Define a function `containsQueenOfHearts()` that takes in an array of "card"
   objects (e.g., a Poker hand) and returns whether or not the Queen of Hearts
   is in that array.
   Hint: use a loop to check each card. */
function containsQueenOfHearts(arr) {
  for (let i = 0; i < arr.length; i++) {
    let card = arr[i];
    if (card.suit === 'hearts' && card.rank === 12) {
      return true;
    }
  }
  return false;
}
   

/* Define a function `getHighCard()` that takes in an array of "card" objects
  and returns the card object with the highest value. The "high card" is the one
  with the highest rank. Cards of different suits but the same rank are 
  considered to have the same value, and either is a valid result */
function getHighCard(arr) {
  let res = null;
  for (let i = 0; i < arr.length; i++) {
    if (!res || res.rank < arr[i].rank) {
      res = arr[i];
    }
  }
  return res;
}
  

/* Define a function `isFlush()` that takes in an array of "card" objects and
   returns whether or not the cards all have the same _suit_. */
function isFlush(arr) {
  if (arr.length === 0) {
    return true;
  }
  let suit = arr[0].suit;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].suit !== suit) {
      return false;
    }
  }
  return true;
}
   

/* Extra challenge: define a function `hasPair()` that takes in an array of 
   "card" objects and returns whether or not there is at least one _pair_ (two 
   cards with the same _rank_) in the array.
   Double challenge: return the rank of the pair of cards with the highest rank 
   (e.g., if the hand contains more than one pair!) */
function hasPair(arr) {
  let rankMap = {};
  let highestRank = null;
  for (let i = 0; i < arr.length; i++) {
    let card = arr[i];
    if (!(card.rank in rankMap)) {
      rankMap[card.rank] = 0;
    }
    rankMap[card.rank]++;
    if (rankMap[card.rank] > 1) {
      // pair found
      if (!highestRank) {
        highestRank = card.rank;
      } else{
        highestRank = Math.max(highestRank, card.rank);
      }
    }
  }
  return highestRank;
}
console.log(hasPair([deck[1], deck[14], deck[50], deck[22]]));


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof addFour !== 'undefined') 
    module.exports.addFour = addFour;
  if(typeof twelveString !== 'undefined') 
    module.exports.twelveString = twelveString;
  if(typeof compoundInterest !== 'undefined') 
    module.exports.compoundInterest = compoundInterest;
  if(typeof fizzBuzz !== 'undefined') 
    module.exports.fizzBuzz = fizzBuzz;
  if(typeof getLetterFrequencies !== 'undefined')
    module.exports.getLetterFrequencies = getLetterFrequencies;
  if(typeof deck !== 'undefined')
    module.exports.deck = deck;
  if(typeof containsQueenOfHearts !== 'undefined')
    module.exports.containsQueenOfHearts = containsQueenOfHearts;
  if(typeof getHighCard !== 'undefined')
    module.exports.getHighCard = getHighCard;
  if(typeof isFlush !== 'undefined')
    module.exports.isFlush = isFlush;
}