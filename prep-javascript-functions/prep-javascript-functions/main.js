function addTwoNumbers(a, b) {
  return a + b;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  var minutes = hours * 60;
  return minutes;
}

var convertedMinutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise', convertedMinutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var getGreetingResult = getGreeting('World');
console.log(getGreetingResult);

function addAndMultiplyBy5(a, b) {
  return (a + b) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultipleBy5 Exercise:', addAndMultiplyBy5Result);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}

var output = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', output);

function getCircleCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  return circumference;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log(getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log(getFullNameResult);

function cube(number) {
  var result = Math.pow(number, 3);
  return result;
}

var cubeResult = cube(5);
console.log(cubeResult);
