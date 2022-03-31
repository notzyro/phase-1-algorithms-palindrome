function isPalindrome(word) {
  // Write your algorithm here
  return word == word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  split, reverse, then join to compare with word
*/

/*
  Add written explanation of your solution here
  If word = split reversed word, = true
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
