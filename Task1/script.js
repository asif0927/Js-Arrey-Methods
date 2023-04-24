let data = [
    {name: 'daniel', age: 45},
    {name: 'john', age: 34},
    {name: 'robert', age: null},
    {name: 'jen', age: undefined},
    {name: null, age: undefined}
];
let nullundefinedfilterdata=data.filter((item)=>item.name!=null&&item.age!=null&&item.name!=undefined&&item.age!=undefined);
console.log(nullundefinedfilterdata);