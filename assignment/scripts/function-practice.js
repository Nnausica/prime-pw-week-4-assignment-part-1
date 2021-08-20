console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

let name = prompt ('What is your first name');

function helloName( name ) {
  let greeting = ('Hello ' + name);
  return greeting;
}//end helloName

console.log(helloName(name))




// Remember to call the function to test



// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  let answer = (firstNumber + secondNumber);
  return answer
  // return firstNumber + secondNumber;
}
console.log ('addnumbers', addNumbers( 2,4))

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3){
  let multiplicaiton = (num1 * num2 * num3)
  return multiplicaiton
}
console.log ("mulitplication equals", multiplyThree( 2, 4, 5))


//tried Q4 again but with an array and a loop just to see if I could...

function timesThree( ){
  //create a loop to ask for 3 numbers
   let myNums = []
  for (let i=0; i<3;i++){
    let num= prompt ('give me a number to multiply');
    myNums.push(num);
  }//end for loop

  let multithree = (myNums[0]*myNums[1]*myNums[2]); //take three numbers given and multiply them
  return multithree 
} //end function timesThree

console.log ("multi equals", timesThree())


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise


function isPositive( number ) {
  if ( number > 0 ){
    return true;}
  else ( number <= 0 );{
    return false;
     }//end if else
};
// console.log("is the number positive?", isPositive())

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let array=[0]

function getLast( array ) {

  let lastThing = array[array.length-1];

  if ( array.length > 0){console.log('the value of the last item is:', lastThing)}
  else { console.log('undefined')};
  
};//end function

console.log(getLast(array));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
