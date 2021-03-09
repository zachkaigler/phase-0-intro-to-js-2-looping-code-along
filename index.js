// Code your solutions in this file
/* 
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}
*/

function writeCards(namesArray, event) {
    let messageArray = [];
    for (let counter = 0; counter < namesArray.length; counter++) {
        let note = `Thank you, ${namesArray[counter]}, for the wonderful ${event} gift!`;
        //debugger
        messageArray.push(note);
    }
    //debugger
    console.log(messageArray)
    return messageArray;
}

let birthdayGuests = ["Ali", "Ryan", "Joe"];
//writeCards(["Ali", "Ryan", "Joe"], "birthday");
writeCards(birthdayGuests, "birthday");



function countDown(n) {
    let counter = n;
    while(counter <= n && counter >= 0) {
        console.log(counter);
        counter = counter-=1;
    }
}

countDown(10);