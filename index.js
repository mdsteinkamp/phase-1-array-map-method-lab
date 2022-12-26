const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function () {
  return tutorials.map(iterateString)
}


/* const titleCased = () => {
  return tutorials
} */

//the below works to iterate through each tutorial and upper case first letter of each word
//const titleCased = tutorials.map(iterateString);

const string1 = 'what does the this keyword mean?';

/* //split sentence string into array of words
const string1Arr = string1.split(' ');

//caplitalize first letter of a string
function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

//capitalize earch letter in sentence and return a sentence string
const upperString1 = string1Arr.map(capitalizeFirst).join(' ');
 */


function iterateString(sentence) { 
  const sentenceArr = sentence.split(' ');
  const upperSentenceArr = sentenceArr.map(function (str) {
    return str[0].toUpperCase() + str.slice(1);
  })
  return upperSentenceArr.join(' ');
}