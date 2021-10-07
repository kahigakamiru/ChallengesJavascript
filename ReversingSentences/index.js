//declaring the string sentence
var str = "bob likes dogs";
//first we split the words, reverse the split words then join again
console.log(str.split(/\s/).reverse().join(" "));
