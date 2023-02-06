// math
const mathTerm = Math.pow(4,4);
console.log(mathTerm);


const myNumber = 55;
const hisNumber = 68;

const saveNumber = Math.abs(myNumber-hisNumber);
// console.log(saveNumber);

if(saveNumber < 10){
    console.log('Give my money back');
}
else{
    console.log('I have no money');
}

// round

const myNum = 56.4532;
const myNum2 = 56.5532;
const showMyNum = Math.round(myNum);
const showMyNum2 = Math.round(myNum2);
console.log(showMyNum)
console.log(showMyNum2)

const result = Math.ceil(1.00001);
console.log(result);
console.log(Math.floor(234.123));

const result2 = Math.round(Math.random()*10);
console.log(result2);