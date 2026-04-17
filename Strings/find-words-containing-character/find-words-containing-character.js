let words = ["leet", "code"],
  x = "e";

let temp = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].includes(x)) {
    temp.push(i);
  }
}

console.log(temp);
