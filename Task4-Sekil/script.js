function getSequence(minnum,maxnum){
    let emptyarr=[];
    for (let i= minnum; i <=maxnum; i++) {
        emptyarr.push(i);
    }
    return emptyarr;
}
console.log(getSequence(1,5));