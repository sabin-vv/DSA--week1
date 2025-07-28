
let str = "javascript"
let out = ""

function removeChar(s, char) {
    
    if (s === "")
        return ""

    if (s[0] === char) {
        return out += removeChar(s.slice(1),char)
    } else
        return out += s[0] + removeChar(s.slice(1),char)

}

console.log(removeChar(str, "s"))