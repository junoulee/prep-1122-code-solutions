const person = { firstName: 'Junou', lastName: 'Lee', hobby: 'gaming' };
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is" + ' ' + fullName);
person.job = 'student';
console.log("The person's current job is" + ' ' + person.job);
person.previousJob = 'Manager';
console.log("The person's pervious job is" + ' ' + person.previousJob);
console.log(person);
