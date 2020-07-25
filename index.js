/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


let votingAge;

if(votingAge > 18){
    console.log(true)
} else {
    console.log(false)
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the 
// value assigned to a second variable (no function required)

let a; 
let b;

if (a != b){
    a = b
} else {
    console.log('They are the same value')
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let stringToNum = parseInt("1999");



//Task d: Write a function to multiply a*b 

function multiplyNums(a, b){
    return a * b
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function ageToDogYears(age){
    return age * 7
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function foodToFeed(weight, age){
    return 
}



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const userChoice = getChoice => {
    input = getChoice.toLowerCase();
    if(input === 'rock' || input === 'paper' || input === 'scissors'){
        return input
    } else {
        console.log('Choose a valid option')
    }
}

function setCompChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2: 
            return 'scissors';
    }
}

function whoWins(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } else if (userChoice === 'paper'){
      if (compterChoice === 'scissors') {
        return 'Computer wins!';
      }else {
        return 'You win!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } else if (userChoice === 'bomb') {
      return 'You win!';
    }
  }
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function convertKmtoMiles(kilometers){
    return kilometers * 0.621371
}



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function convertFootToCm(foot){
    return foot * 30.48
}



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function ninetyNineBottles(bottles){
    for(let i = bottles; i > 0; i--){
        let newBottles = i;
        console.log(`${newBottles} bottles of soda on the wall, ${newBottles} bottle of soda, take one down and pass it around, ${newBottles} bottle of soda on the wall`)
    }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function whatsMyGrade(grade){
    if(grade >= 90){
        console.log('You got an A')
    } 
    if(grade >= 80 && grade < 90){
        console.log('You got a B')
    }
    if(grade >= 70 && grade < 80){
        console.log('You got a C')
    }
    if(grade >= 60 && grade < 70){
        console.log('You got a D')
    }
    if(grade < 60){
        console.log("You got an F")
    }
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





