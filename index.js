
/*
1. Create a function that can create a triangle pattern according to the height 
*/

function getTrianglePattern(height){
    let number=1;

    for(let i=1;i<=height;i++){
        let row='';

        for(let j=1;j<=i;j++){
             row+= (number < 10 ? "0" : "") + number + " ";
             number++;
        }
        console.log(row);
    }
}

getTrianglePattern(5);

/*
2. Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
*/

function getFizzBuzz(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        result.push((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i.toString());
    }

    return result.join(", ");
}

console.log(getFizzBuzz(6));
console.log(getFizzBuzz(15));

/*
3. Create a function to calculate Body Mass Index (BMI)
*/

function getBMI(weight, height) {
    const bmi = weight / height ** 2;
    
    return bmi < 18.5 ? "Less Weight" :
           bmi <= 24.9 ? "Ideal" :
           bmi <= 29.9 ? "Overweight" :
           bmi <= 39.9 ? "Very Overweight" :
                         "Obesity";
}

console.log(getBMI(54,165));

/*
4.Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
*/

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getFilterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(getFilterEvenNumbers(inputArray));
console.log(inputArray.filter(num => num % 2 === 0));

/*
5. Write a function to split a string and convert it into an array of words
*/

let string = 'Hello World';

function getStringToArray(string) {
    return string.split(' ');
}

console.log(getStringToArray(string));
console.log(string.split(' '));