function reverseString(text){
    let newReverse = ''
    for(let i= text.length-1; i>=0 ;i--){
        const element = text[i];
        newReverse = newReverse + element;
       
    }
    
    return newReverse
}

const inputString = 'I am a good girl';
const reverse = reverseString(inputString)
console.log(reverse)

