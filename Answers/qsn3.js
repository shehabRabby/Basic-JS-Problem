
ispalindrome("madam");
ispalindrome("hello");

function ispalindrome(str){
    let rev="";
    for(let i = str.length-1; i>=0; i--){
        rev += str[i];
    }
    if(rev === str){
        return console.log("true");
    }else{
        return console.log("false");
    }
}