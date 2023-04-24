let numbers = [1.5, 2.56, 5.1, 12.33];
/*Ceil*/
let numbers2=numbers.forEach((element)=>console.log(Math.ceil(element)));
/*Floor */
let numbers3=numbers.forEach((element)=>console.log(Math.floor(element)));
/*Round */
let numbers4=numbers.forEach((element)=>console.log(Math.round(element)));
/*Math.max */
let numbers5=Math.round(Math.max(...numbers));
console.log(numbers5);
/*Math min */
let numbers6=Math.round(Math.min(...numbers));
console.log(numbers6);