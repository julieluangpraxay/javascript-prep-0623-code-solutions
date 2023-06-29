/* exported compact */
function compact(array) {
  const compactedArray = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    // Exclude falsy values: false, null, NaN, 0, -0, undefined, and ""
    if (
      value !== false &&
      value !== null &&
      !Number.isNaN(value) &&
      value !== 0 &&
      !Object.is(value, -0) &&
      value !== undefined &&
      value !== ''
    ) {
      compactedArray.push(array[i]);
    }
  }

  return compactedArray;
}
