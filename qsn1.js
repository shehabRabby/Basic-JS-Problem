function revrseString(str){
    let rev ="";
    for(let i= str.length-1; i>0; i--){
        rev += str[i];
    }
    return rev;
}

const str ="hello";
const ans = revrseString(str);
console.log(ans);
