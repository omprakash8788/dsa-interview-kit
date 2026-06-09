let items = [
    ["phone","blue","pixel"],
    ["computer","silver","lenovo"],
    ["phone","gold","iphone"]
];

let ruleKey = "color",
    ruleValue = "silver";

var countMatches = function(items, ruleKey, ruleValue) {

    let keyIndex;

    if(ruleKey === "type") {
        keyIndex = 0;
    }
    else if(ruleKey === "color") {
        keyIndex = 1;
    }
    else {
        keyIndex = 2;
    }

    let count = 0;

    for(let i = 0; i < items.length; i++) {

        if(items[i][keyIndex] === ruleValue) {
            count++;
        }
    }

    return count;
};

console.log(
    countMatches(items, ruleKey, ruleValue)
);