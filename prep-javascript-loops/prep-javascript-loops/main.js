// create your loops here.
function whileLoop1() {
  const array = [];
  let i = 0;

  while (i < 10) {
    array.push(i);
    i++;
  }

  return array;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const newArray = [];
  let i = 0;

  while (i <= 18) {
    newArray.push(i);
    i += 2;
  }
  return newArray;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const loopArray = [];

  for (let i = 0; i <= 9; i++) {
    loopArray.push(i);
  }
  return loopArray;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  // when i is 99, 99 is greater than or equal to 0 & if true it will subtract by one until it's not true
  for (let i = 99; i >= 0; i--) {
    console.log('Time till explosion', +i);
  }
}
// this code below calls the function, without this it won't run
forLoop2();

function forInLoop1(object) {
  const newArray = [];

  for (const property in object) {
    newArray.push(property);
  }

  return newArray;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log(forInLoop1(object));

function forInLoop2(object2) {
  const newArray2 = [];

  for (const property in object2) {
    newArray2.push(object2[property]);
  }
  return newArray2;
}

const object2 = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log(forInLoop2(object2));
