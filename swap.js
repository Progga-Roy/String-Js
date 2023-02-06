let first = 7;
let second = 9;

const temp = first;
first = second;
second = temp;

// console.log(first,second);

// destructuring

[first,second] = [second,first];
console.log(first,second);