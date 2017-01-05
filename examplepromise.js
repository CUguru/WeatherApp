// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City Not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });


// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philly').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// })


function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if((typeof a === 'number') && (typeof b === 'number')) {
        var sum = a + b
        resolve(sum);
      } else {
        reject('Entries need to be numbers');
      }
    }, 1000);
  });
}

addPromise(2, 7).then(function(sum) {
  console.log('promise worked', sum);
}, function(err) {
  console.log('promise error', err);
});

addPromise('buzzy', 8).then(function(sum) {
  console.log('promise worked', sum);
}, function(err) {
  console.log('promise error', err);
});
