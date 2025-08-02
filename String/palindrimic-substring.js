let str = "ababrbaabrb"
let res = ""
let left
let right
for (let i = 0; i < str.length; i++) {
    left = i
    right = i
    while (left >= 0 && right < str.length) {
        if (str[left] === str[right]) {
            if (right - left + 1 > res.length)
                res = str.slice(left, right + 1)
            left--
            right++
        } else {
            break
        }
    }
    left = i
    right = i + 1
    while (left >= 0 && right < str.length) {
        if (str[left] === str[right]) {
            res = (right - left + 1) > res.length ? str.slice(left, right + 1) : res
            left--
            right++
        } else {
            break
        }
    }
}
console.log(res);
