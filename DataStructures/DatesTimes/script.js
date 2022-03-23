// new date() without arguments – create a Date object for the current date and time:

let now = new Date();
alert(now);

// new date(milisecond)

// `0` means 01.01.1970 UTC+0 
let Jan01_1970 = new Date(0);
alert(Jan01_1970);

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(Jan02_1970);

/* new Date(year, month, date, hours, minutes, seconds, ms)
Create the date with the given components in the local time zone. Only the first two arguments are obligatory.
-The year must have 4 digits: 2013 is okay, 98 is not.
-The month count starts with 0 (Jan), up to 11 (Dec).
-The date parameter is actually the day of month, if absent then 1 is assumed.
-If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
*/

//For instance:

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

//The maximal precision is 1 ms (1/1000 sec):

let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert(date); // 1.01.2011, 02:03:04.567

/* Get methods
getFullYear() : Get the year (4 digits)
getMonth() : Get the month, from 0 to 11.
getDate() : Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours(), getMinutes(), getSeconds(), getMilliseconds() : Get the corresponding time components.
getDay() : Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.
getTime() : Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.
getTimezoneOffset() : Returns the difference between UTC and the local time zone, in minutes:
*/

let d = new Date();
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());

/* Set methods
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/

let e = new Date();
d.setFullYear(2020);
d.setMonth(5);
d.setDate(20);
d.setHours(10);
d.setMinutes(19);
d.setSeconds(20);
console.log(e);