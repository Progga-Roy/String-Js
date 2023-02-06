function findTallest(array) {
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        let items = array[i]
        if (items > largest) {
            largest = items;
        }

    }
    return largest;
}
const inputArray = findTallest([55, 12, 89, 44, 67, 64])
console.log('Tallest', inputArray);

// find smallest number

function findSmallest(number){
    let smallest = number [0]
for(let i=0; i<number.length;i++){
    let element = number[i];
    if(element < smallest){
        smallest = element;
    }
}
return smallest;
}
const input = findSmallest([55, 12, 89, 44, 67, 64])
console.log('Smallest', input);