// Code your solutions in this file
// for (let age = 30; age< 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for (let i; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger
    }
    return gifts
}

let names = [];
function writeCards(names){
    return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`) 
}

function countDown(num){
    let Num = num
    while(Num >=0){
        console.log(Num)
        Num--
        // num = 0
    }
}
countDown(10)