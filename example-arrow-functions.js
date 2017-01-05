var names = ['Buzzy', 'Biodun', 'Malachi', 'Bethnay', 'Junior'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
//
// console.log(returnMe('Buzzy'));

 // function add(a, b) {
 //   return a + b;
 // }
 //
 // console.log(add(3, 6));
 // console.log(add(12, 34));

//statement
var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(32, 89));


var addExpression = (a, b) => a + b;

console.log(addExpression(32, 1));
