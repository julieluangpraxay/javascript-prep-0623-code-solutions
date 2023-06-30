/* exported isVowel */
function isVowel(char) {
  if (typeof char !== 'string' || char.length !== 1) {
    return false; // Return false if the input is not a single character
  }

  // Convert the character to lowercase for case-insensitive comparison
  char = char.toLowerCase();

  // Check if the character is a vowel
  return (
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
  );
}

// Test the function with the given examples
console.log(isVowel('L')); // Output: false
console.log(isVowel('f')); // Output: false
console.log(isVowel('Z')); // Output: false
console.log(isVowel('a')); // Output: true
console.log(isVowel('E')); // Output: true
console.log(isVowel('I')); // Output: true
console.log(isVowel('o')); // Output: true
console.log(isVowel('u')); // Output: true
