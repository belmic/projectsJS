//This keyword
//console.log(this);

// function calculateAge (year){
//   console.log(2016 -year);
//   console.log(this);
// }
// calculateAge(1998);

var john = {
    name:         'John',
    yearOfBirth:  1999,
    calculateAge: function (){
                  console.log(this);
                  console.log(2016 - this.yearOfBirth);
                  // function innerFunction (){
                  //   console.log(this);
                  // }
                  // innerFunction();
    }
}
john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1998
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();
