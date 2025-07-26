function palindrome(str){
  let reverse = ""
  if(str === "")
    return ""
  reverse = palindrome(str.slice(1)) + str[0]
  return  reverse
  
}
console.log(palindrome("mom"))