// var name ='John';
// console.log(name);
//
// var lastName = 'Smith';
// console.log(lastName);
//
// var age = 26;
// console.log(age);
//
// var fullAge = false;
// console.log(fullAge);
// console.log(name + age);
//
// var job, isMarried;
//
// console.log(job);
//
// job = "teacher";
// isMarried = false;
// console.log(name+' is a '+age+' years old  '+job+' '+ isMarried);
//
// age = 'thirty six';
// job = "driver"
// console.log(name+' is a '+age+' years old  '+job+' '+ isMarried);
//
// var lastName = prompt("What is the last name");
// console.log(lastName);
// alert(name+' is a '+age+' years old  '+job+' '+ isMarried)
// var now = 2016;
// var birthYear = now - age * 2;
//
// console.log(birthYear);
// var ageJohn = 30;
// var ageMark = 30;
//
// ageJohn = ageMark = (3+5)*4-6;
// ageJohn++;
// ageMark *= 2;
//
// console.log(ageJohn);
// console.log(ageMark);

//IF else statement

// //boolean logic
// var age = 24;
// if (age < 20) {
//   console.log('John is teenager');
// }else if (age >20 && age <30) {
//   console.log('John is young man');
// }
// else{
//   console.log('John is a man');
// }
//
// var job ='teacher';
// job = prompt('What does John do');
//
// switch (job) {
//   case 'teacher':
//     console.log('John is a teacher');
//     break;
//   case 'driver':
//     console.log('John is a driver');
//     break;
//   default:
//     console.log('John is a god');
// }

// var ageJohn = 30;
// var ageMark = 30;
// var ageAlla = 31;
//
// var heightJohn = 172;
// var heightMark = 172;
// var heightAlla  = 172;
//
// var scoreJohn = heightJohn + 5 * ageJohn;
// var scoreMark = heightMark + 5 * ageMark;
// var scoreAlla = heightAlla + 5 * ageAlla;
//
// if (scoreJohn > scoreMark && scoreJohn > scoreAlla) {
//   console.log('John win with score '+ scoreJohn);
// }else if (scoreMark > scoreJohn && scoreMark > scoreAlla){
//   console.log('Mark win with score '+ scoreMark);
// }else if (scoreAlla > scoreJohn && scoreAlla > scoreMark){
//   console.log('Alla win with score '+ scoreAlla);
// }else{
//   console.log('DRAW with score '+ scoreJohn);
// }

//Functions
//?
//Arrays

//Object
// var john = {
//   name:       'John',
//   lastName:   'Smith',
//   yearOfBirth: 1990,
//   job:        'teacher',
//   married:     false
// };
//
// console.log(john.lastName);
// console.log(john['lastName']);
//
// var xyz = 'job'
// console.log(john[xyz]);
// john.lastName = 'Miller';
// john['job'] = 'programmer';
//
// console.log(john[xyz]);
// console.log(john.lastName);
//
// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// console.log(jane);

// Object and methodes

// var john = {
//   name:       'John',
//   lastName:   'Smith',
//   yearOfBirth: 1990,
//   job:        'teacher',
//   married:     false,
//   family:     ['Jane','Mark','Bob'],
//   calculateAge: function(){
//     return 2016 - this.yearOfBirth;
//   }
// };
//console.log(john.calculateAge());

// var age = john.calculateAge();
// john.age = age;
//
// console.log(john.age);

// var john = {
//   name:       'John',
//   lastName:   'Smith',
//   yearOfBirth: 1990,
//   job:        'teacher',
//   married:     false,
//   family:     ['Jane','Mark','Bob'],
//   calculateAge: function(){
//     //return 2016 - this.yearOfBirth;
//     this.age = 2016 - this.yearOfBirth;
//   }
// };
//
// john.calculateAge();
//
// console.log(john);

///Loops

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
 //
 // var names = ['John','Jane','Mary','Mark','Bob'];

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
//
// for (var i = names.length-1; i >= 0; i--) {
//   console.log(names[i]);
// }
// var i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }
//
// for (var i = 1; i <= 5; i++) {
//   console.log(i);
//   if(i === 3){
//     break
//   }
// }
// for (var i = 1; i <= 5; i++) {
//
//   if(i === 3){
//     continue
//   }
//   console.log(i);
//
// }

// function FullAge(_year){
//   return 2017 - _year;
// }
//
// var ages =   [1981,1988,2005,1999,2001];
// //var output = [];
//
// function printFullAge(_ages){
//   var output = [];
//   for (var i = 0; i < _ages.length; i++) {
//     if (FullAge(_ages[i])>=18) {
//       output[i] = true;
//     }else{
//       output[i] = false;
//     }
//   }
//   return output;
// }
// var print = printFullAge(ages);
//
// console.log(print);
