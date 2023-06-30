/* exported reverseWord */
function reverseWord(word) {
  if (typeof word !== 'string') {
    return ''; // Return an empty string for non-string input
  }

  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  return reversed;
}
