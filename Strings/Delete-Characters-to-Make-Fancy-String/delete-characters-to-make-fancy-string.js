
let s = "leeetcode";

function makeFancyString(s) {

    let res = "";
    let count = 0;

    for (let i = 0; i < s.length; i++) {

        // Same as previous character
        if (i > 0 && s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        // Allow only up to 2 consecutive characters
        if (count <= 2) {
            res += s[i];
        }
    }

    return res;
}

console.log(makeFancyString(s));