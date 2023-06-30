/* exported getWords */
function getWords(string) {
  if (typeof string !== 'string') {
    return []; // Return an empty array for non-string input
  }

  // Split the string into words using space as the delimiter
  return string.split(' ').filter((word) => word !== '');
}
