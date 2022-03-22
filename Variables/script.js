let firstName = 'Rabia';
console.log(firstName);

let lastName = 'Uğurlu';
console.log(lastName);

let id = '123456789789';
console.log(id);

let gender = 'female';
console.log(gender);

let address = {
    city: 'İstanbul',
    district: 'Üsküdar'

}
console.log(address);

let hobbies = ['fitness', 'yoga', 'software'];
console.log(hobbies);

let order1 = '231';
let order2 = '789';
let totalOrder = order1 + order2;
console.log(totalOrder); //231789

let order3 = Number('231');
let order4 = Number('789.8');
let totalOrder1 = order3 + order4;
console.log(totalOrder1); //1020.8

let order5 = parseInt('100.5');
let order6 = parseInt('218.8');
let totalOrder2 = order5 + order6;
console.log(totalOrder2); //318

const yearOfBirth = 2000;
console.log(new Date().getFullYear() - yearOfBirth); //22

let programmingLanguage = 'javascript';
console.log(programmingLanguage.length); //10









/* We can declare variables to store data by using the var, let, or const keywords.

1)let – is a modern variable declaration.

2)var – is an old-school variable declaration. Normally we don’t use it at all,
but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.

3)const – is like let, but the value of the variable can’t be changed. */