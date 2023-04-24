let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
let bdaysfilter=bdays.map((item)=>item.replace('-','/'));
console.log(bdaysfilter);
/*- isharesini / ile deyishin
output: ['08/14', '10/04', '04/21', 08/14, '10/04', '04/21'];*/