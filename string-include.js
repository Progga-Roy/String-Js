let lyrics = 'Tumi bondhu KALa pakhi ami jeno KI? BosHonTo kale e tomay chinte Pari ni';
let checkLyrics = 'BoshonTo';
let output1 =lyrics.toLowerCase(checkLyrics.includes());
let output2 =lyrics.toLowerCase().includes(checkLyrics.toLowerCase());
// console.log(output1);
// console.log(output2);


// test indexOf

// console.log(lyrics.indexOf('tomay'));
 if(lyrics.indexOf('bondhu')!==-1){
    console.log('Bondhu is here :)');
 }
 else {
    console.log('Bondhu nai re nai :(')
 }

//  startWith

console.log(lyrics.startsWith('Tumi'));
console.log(lyrics.startsWith('2mi'));


// endsWith
const fileName = '202003312.pdf'
console.log(fileName.endsWith('pdf'));