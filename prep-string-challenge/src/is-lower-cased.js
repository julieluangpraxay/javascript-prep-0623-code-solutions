/* exported isLowerCased */
function isLowerCased(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return false; // Return false if the input is not a non-empty string
  }

  // Check if all characters are lowercase
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false; // Return false if any character is not lowercase
    }
  }

  return true; // All characters are lowercase
}

// Test the function with the given examples
console.log(isLowerCased('LearningFuze')); // Output: false
console.log(isLowerCased('zip-ties')); // Output: true
console.log(isLowerCased('JavaScript')); // Output: false
console.log(isLowerCased('burgers')); // Output: true
console.log(isLowerCased('HTML')); // Output: false
