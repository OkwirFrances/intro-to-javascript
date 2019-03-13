var n=10;
for (var y = 2; y <= n; y++) {

  var notPrime = false;
  for (var i = 2; i <= y; i++) {
      if (y%i===0 && i!==y) {
          notPrime = true;
      }
  }
  if (notPrime === false) {
    console.log(y);
  }
}
