const b = "5,4,3,2,1";
let barrey=(b.split(','));
let convertNumArrey=barrey.map((item)=>Number(item));
let reduceNumaArrey=convertNumArrey.reduce((total,num)=>total+num,0)
console.log(reduceNumaArrey);