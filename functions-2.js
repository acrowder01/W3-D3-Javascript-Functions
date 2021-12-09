/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (x, y) => {
  // ADD YOUR CODE HERE
  
  if (x > y) {
      return (x);
  } 
  else if (y > x) {
    return (y);
  } 
  else  {
      return('Invalid input')
  }
};

 console.log(maxOfTwoNumbers('nine',8))




maxOfThree();

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (x,y,z) => {
  // ADD YOUR CODE HERE
  
  if (x > y || z) {
      return (x);
  }

  else if (y > x || z) {
    return (y);
  }

  else if (z > x || y) {
      return z}

  else{
      console.log('Please Try entering a number')
  }

};
console.log(maxOfThree(3,4,5))



/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = () => {
  // ADD YOUR CODE HERE
  let vow = ['a', 'e', 'i', 'o', 'u']
  if  (vow.indexOf('x') === -1) {
      return ('Not a vowel')
} else  {
   return('this is avowel')

  }
};



/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
// ADD YOUR CODE HERE
 
sumArray = (number) => {
let sum = 0;
  for (let i=0; i < number.length; i++){
    sum = sum + number[i]
  }

   return sum;

   multArray = (number) =>{
     let mult = 1;
     for( let i=0; i< number.length; i++){
       mult = mult * number[i];
     }
   }
};

console.log(sumArray([4, 5, 6]));
console.log(multArray([4,5,6]));



/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
numArguments = (a,b) =>{
  return (numArguments.length)
}
console.log(numArguments([4,6,7,8,9]));



/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

  // ADD YOUR CODE HERE

  reverseString = (str) => {

    let string ='';
    for (let i = str.length; -i >= 0; i--)
    {string += str[i]}
    return string
};
console.log(reverseString('Friday'));


/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = () => {
  // ADD YOUR CODE HERE
};

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = () => {
  // ADD YOUR CODE HERE
};
