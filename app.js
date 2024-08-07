// # Code Challenges (Set 1)

// 1. Write a function named fizzBuzz that takes in two(2) parameters which
// are expected to be strings. The function should return the string Fizz if
// the combined length of the parameters is divisible by 3, the string Buzz
// if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and
// 3.

function fizzBuzz(str1, str2) {
  let str = str1.concat(str2);

  if (str.length % 3 == 0 || str.length % 5 == 0) {
    return 'FizzBuzz';
  } else if (str.length % 5 == 0) {
    {
      return 'Buzz';
    }
  } else if (str.length % 3 == 0) {
    return 'Fizz';
  }
}
console.log(fizzBuzz('Hellooo', 'Worldone'));

// 2. Write a JavaScript program that prompts a user to enter their year of
// birth and in turn prints a string in the console stating whether the user
// is a minor, a youth, or an elder. Anyone below 18 years is a minor,
// anyone between 18 and 36 years is a youth and the rest are elders.

const yearOfBirth = Number(prompt('Please enter your year of birth', ''));
const currentYear = 2024;
const age = currentYear - yearOfBirth;
if (age < 18) {
  console.log('You are still a minor, go back home!');
} else if (age >= 18 && age <= 36) {
  console.log('You are a youth now, you have come of age!!');
} else {
  console.log('Elder, this program is more tasking, we need your advise!');
}
