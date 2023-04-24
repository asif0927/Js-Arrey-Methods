var arr=[32,25,85,89,45,76,7,41,2,12];
/*a-varianti*/
for (let i= 0; i < arr.length; i++) {
    console.log(arr[i]);
}
/*b-varianti */
let big=Math.max(...arr);
console.log(big);
/*c varianti*/
let arr2=arr.push(15);
console.log(arr);
/*d varianti */
let remove=arr.shift();
console.log(arr);
/*e varianti */
arr2=arr.sort((a,b)=>a-b);
console.log(arr2);
console.log(arr2[arr2.length-1]);
/*f varianti */
arr2.splice(3,0,43);
console.log(arr2);

/*g-varianti */
for (let i = 3; i < arr2.length; i++) {
    console.log(arr2[i]);
}
/*h-variant */
arr2=arr2.forEach((element)=>console.log(element));
/*i-varianti */
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>40){
        console.log(arr[i]);
    }
}
let arr3=arr.filter((element)=>element>40);
console.log(arr3);