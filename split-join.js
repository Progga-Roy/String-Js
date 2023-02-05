
// split
const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ratione, culpa facere corporis porro alias.'

const showLorem = lorem.split(' ');
// const showLorem = lorem.split('.');
// const showLorem = lorem.split('');
console.log(showLorem);

// slice
const showLorem2 = lorem.slice(12,16);
console.log(showLorem2);
const showLorem3 = lorem.substring(20,26)
console.log(showLorem3);

// join 
  
const lorem2 = ['Lorem ipsum, dolor sit amet consectetur' ,
'adipisicing elit. Nemo ratione,' ,
' culpa facere corporis porro alias.']

console.log(lorem2.join('/'));