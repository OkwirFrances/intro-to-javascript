var birth_date = '8/2/1995';
var date = birth_date.split("/");
var year = parseInt(date[2]);
var age = 2019 - year;
console.log("you are " + age +  " years old");
