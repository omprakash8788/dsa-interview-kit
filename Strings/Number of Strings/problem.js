let patterns = ["a","abc","bc","d"], word = "abc"
var numOfStrings = function(patterns, word) {
    let count = patterns.filter(pat => word.includes(pat)).length;
    return count;
};
console.log(numOfStrings(patterns, word))