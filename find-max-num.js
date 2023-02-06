
function findMax(jim, della, chinku) {

    if (jim > della && jim > chinku) {
        console.log('Jim get the cake')
    }
    else if (della > jim && della > chinku) {
        console.log('Della get the cake')
    }
    else {
        console.log('Chinku get the cake')
    }
    

}
const numbers = findMax(84, 99, 77);
console.log(numbers);

function findMax(jim, della, chinku) {
return Math.max(jim,della,chinku)

}
const numbers1 = findMax(84, 99, 77);
console.log(numbers1);