const person = {
  firstName: 'Julie',
  lastName: 'Luangpraxay',
  hobby: 'Gaming',
};
console.log(person);

var fullName = person.firstName + person.lastName;
console.log("The person's name is: " + fullName + '.');

person.job = 'E-commerce Business Owner';
console.log("The person's current job is: " + person.job + '.');

person['previousJob'] = 'Social Media Specialist';
console.log("The person's previous job is: " + person['previousJob']);

const object = {
  firstName: 'Julie',
  lastName: 'Luangpraxay',
  hobby: 'Gaming',
  job: 'E-commerce Business Owner',
  previousJob: 'Social Media Specialist',
};
console.log('The complete person object:', object);
