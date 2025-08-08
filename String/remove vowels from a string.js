let str = 'javascript'

function vowelsRemove(str){

    if(str.length === 0)
        return ""
    if(/[aeiouAEIOU]/.test(str[0])){
        return vowelsRemove(str.slice(1))
    }else{
       return  str[0] + vowelsRemove(str.slice(1) )
    }
}

console.log(vowelsRemove(str));
