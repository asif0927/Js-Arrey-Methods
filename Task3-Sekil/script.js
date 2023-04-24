let numarr=[1,2,8,16];
function checkFactors(arr,num){
    let boolarr=[];
    for(let i=0;i<arr.length;i++){
        if(num%arr[i]==0){
            boolarr.push(true)
        }
        else{
            boolarr.push(false);
        }
    }
    if(boolarr.every((item)=>item==true)){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkFactors(numarr,32));