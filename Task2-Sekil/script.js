let student=[
    {name:"Steve"},
    {name:"Mike"},
    {name:"John"},
    {name:"Andrei"}
]
function getStudentNames(obj) {
    let outputarr=obj.map((item)=>item.name);
    return outputarr;
}
console.log(getStudentNames(student));