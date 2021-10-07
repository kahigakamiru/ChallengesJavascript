const num = [ 1, 3, 5, 3, 7, 3, 1, 1, 5];

const findingDuplicates = num => num.filter((item, index) => num.indexOf(item) === index)
const noDuplicates = findingDuplicates(num)
console.log(noDuplicates)