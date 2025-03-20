//1. Extract last four characters
const word = "extravaganza";
const lastFour = word.slice(-4);  // Or word.substring(word.length - 4);
console.log(lastFour); // Output: "nza"


//2.  Insert "eat" at the fourth index
const food = "The quick fox jumped over the lazy dog";
const insertStr = "eat";
const eatFood = food.slice(0, 4) + insertStr + food.slice(4);
console.log(eatFood); 


//3. Count "the" and "brown" in the story sentence
const story = "The quick brown fox jumps over the lazy dog";
const StorylowerCase = story.toLowerCase(); 
const the = StorylowerCase.split("the").length -1;
const brown =StorylowerCase.split("brown").length -1;
console.log(`"the" appears ${the} times.`);   
console.log(`"brown" appears ${brown} times.`); 


//4.  Find "are" and "sitting" in the two sentences
const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
const findAre = string1.includes("are");
const findSitting = string2.includes("sitting");
console.log(`"are" found in string1: ${findAre}`);      
console.log(`"sitting" found in string2: ${findSitting}`); 


//5.
// 1. UpperCase: "wonderful"
const firstWord = "wonderful";
const upperCaseWord = firstWord.toUpperCase();
console.log(upperCaseWord);

// 2. LowerCase: "amazing", "UndERneath"
const secondWord = "amazing";
const lowerCaseWord = secondWord.toLowerCase();
console.log(lowerCaseWord);

const thirdWord = "UndERneath";
const lowerCaseWord2 = thirdWord.toLowerCase();
console.log(lowerCaseWord2); 

// 3. Title case "A wonderful world" 
  function toTitleCase(str) {
    const alllowerCase = str.toLowerCase();
    const words = alllowerCase.split(" ");
    const titleCasedWords = words.map(function(word) {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return "";
      }
    });
    return titleCasedWords.join(" ");
  }
  const wonderStr = "A wonderful world";
  const titleCasedString = toTitleCase(wonderStr);
  console.log(titleCasedString);
  
