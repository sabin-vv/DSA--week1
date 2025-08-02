function palindrome(str) {
  let reverse = ""
  if (str === "")
    return ""
  reverse = palindrome(str.slice(1)) + str[0]
  return reverse

}
function funcPalindromee(str) {
  return palindrome(str) === str
}
console.log(funcPalindromee("mom"))