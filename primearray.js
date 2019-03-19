
const shuffle = require('./shuffle');
var prime=[];
const number = (n) =>
{
 for (var num = 2; num <= n; num++) {

   var a = false;
   for (var i = 2; i <= num; i++) {
       if (num%i===0 && i!==num) {
           a = true;
       }
   }
   if (a === false) {
prime.push(num);
 }
   }
 }
let primes=[number(100)]
console.log(prime);
console.log("shuffle-------------------------");
console.log(shuffle(prime));

let sortAscending = array => {
  //this array stores sort array

  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}
console.log('rearranged-----------');

console.log(sortAscending(prime));
