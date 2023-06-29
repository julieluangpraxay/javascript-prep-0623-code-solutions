/* exported capitalize */
function capitalize(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return word; // Return the input as is if it's not a non-empty string
  }

  // Capitalize the first character and convert the rest to lowercase
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
