var y = 1;
while (y<=100){
if (y%3===0 && y%5===0){
  console.log("FizzBuzz");
}else if (y%3===0) {
  console.log("Fizz");
}else if (y%5===0){
  console.log("Buzz");
}else{
  console.log(y);
}
y++;
}
