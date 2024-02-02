
/*
1. Problem     : Create a function that can create a triangle pattern according to the height 
   Parameters  : height → triangle height
   Simulation  : 1st row -> 1 (1 item)
                 2st row -> 2 3 (2 item)
                 3st row -> 4 5 6 (3 item)
                 4st row -> 7 8 9 10 (4 item)
*/

//Create a function with the parameter height 
function getTrianglePattern(height){
  //Create a variable for the counting the number;
  let number=1;

  //Create a loop to print row 
  for(let i=1;i<=height;i++){
      //Create a variable to hold the number in one row
      let row='';
      // Create a loop to print each item in one single row 
      for(let j=1;j<=i;j++){
          //Create a conditional statement if a number<10 then add 0 before adding number if not add number
           row+= (number < 10 ? "0" : "") + number + " ";
           //Increment the number so it would increase outside the loop
           number++;
      }
      //print row
      console.log(row);
  }
}

getTrianglePattern(5);

/*
2.Problem    : Create a function that can loop the number of times according to the input we provide,
               and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
  Parameters : n → total looping
  Example    : n = 6 →1, 2, Fizz, 4, Buzz, Fizz
               n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
*/

//create a function with the parameter n
function getFizzBuzz(n) {
  //create a variable array to contain the result
  let result = [];
  //create a loop that perform n times
  for (let i = 1; i <= n; i++) {
      //create a conditional statement to push the result into array
      //if i%3===0 return 'fizz', if i%5===0 return 'Buzz', else return i 

      //this time i'll use a ternary conditional if i%3===0 is true return fizz if not return empty string + i%5===0 is true return fizz if not return empty string
      //the else statement will be executed as || operator. If the conditional for %3 and %5 is false then it would return a falsy value and execute the || operation
      //to make sure the array has a consistent type data i'll be using toString() method to change type data i into string 
      result.push((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i.toString());
  }
  // return the result and use join method to return the array into one string add ", " as the separator
  return result.join(", ");
}

console.log(getFizzBuzz(6));
console.log(getFizzBuzz(15));

/*
3.Problem      : Create a function to calculate Body Mass Index (BMI)
  Formula      : BMI = weight (kg) / (height (meter))²
  Parameters   : weight & height
  Return values: < 18.5 return “less weight”
                  18.5 - 24.9 return “ideal”
                  25.0 - 29.9 return “overweight”
                  30.0 - 39.9 return “very overweight”
                  > 39.9 return “obesity”
*/

//create function to calculate BMI with the parameter weight and height
function getBMI(weight, height) {
  //create a variable bmi to calculate body max index = weight/height**2
  const bmi = weight / height ** 2;
  //create conditional statement to categorize according to specified range and return the result
  //i'll write in ternary operation (condition ? <expression if true> : <expression if false>)
  return bmi < 18.5 ? "Less Weight" :
         bmi <= 24.9 ? "Ideal" :
         bmi <= 29.9 ? "Overweight" :
         bmi <= 39.9 ? "Very Overweight" :
                       "Obesity";
}

console.log(getBMI(54,165));

/*
4. Problem  : Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
   Example  : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10
*/

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//create a function to filter numbers
function getFilterEvenNumbers(arr) {
  //use filter() method to creates a new array filled with elements that pass a test provided by a function, return the result
  return arr.filter(num => num % 2 === 0);
}

console.log(getFilterEvenNumbers(inputArray));
console.log(inputArray.filter(num => num % 2 === 0));

/*
5. Problem  : Write a function to split a string and convert it into an array of words
   Example  : “Hello World” → [“Hello”, “World”
*/

let string = 'Hello World';

//create function to split the string into array
function getStringToArray(string) {
  //use split(' ') method to separate the space and put string into array
  return string.split(' ');
}

console.log(getStringToArray(string));
console.log(string.split(' '));
