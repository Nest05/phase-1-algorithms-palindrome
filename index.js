function isPalindrome(word) {
  // Convert the string to lower case to ignore case sensitivity
  word = word.toLowerCase();
  
  // Reverse the string
  let reversedWord = word.split('').reverse().join('');

  // Compare string with reversed string
  if (word === reversedWord) {
    return true;
  }else{
    return false;
  }
}
// Testing
console.log('Expecting:true');
console.log('=>', isPalindrome('mom'));

/* 
  Turn input (word) to lower case .toLowerCase()

   Reverse the string .split().reverse().join()
   Use an if statement to compare the two
   Return true/false depending on finding 
*/

/*
  The solution is to ensure every input is strictly lowercase, then using a variable that holds the reversed string input.
  Then, comparing the string and reversed version with if statements. If they match return true, otherwise false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
