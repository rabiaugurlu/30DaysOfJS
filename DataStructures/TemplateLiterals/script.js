const fullName = 'Sıla Şahin';
const city = 'İstanbul';
const yearOfBirth = 2000;

let val;
val = ' My name is ' + fullName + ' I\'m ' + (2022 - yearOfBirth) + ' years old ' + ' and I live in ' + city;
console.log(val);

//We can write all these codes shorter with template literals.
val = ` My name is ${fullName} I'm ${2022-yearOfBirth} years old and I live in ${city}!`;
console.log(val);