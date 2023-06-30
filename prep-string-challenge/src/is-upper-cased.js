/* exported isUpperCased */
function isUpperCased(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return false; // Return false if the input is not a non-empty string
  }

  // Check if all characters are uppercase
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false; // Return false if any character is not uppercase
    }
  }

  return true; // All characters are uppercase
}

// Test the function with the given examples
console.log(isUpperCased('LearningFuze')); // Output: false
console.log(isUpperCased('JavaScript')); // Output: false
console.log(isUpperCased('HTML')); // Output: true
console.log(isUpperCased('css')); // Output: false
console.log(isUpperCased('PHP')); // Output: true
