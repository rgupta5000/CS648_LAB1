var coinFlip;
var headsStreak = 0;

do {
    coinFlip = Math.round(Math.random());

    // Use a conditional to check the result 
    if (coinFlip === 0) {
        console.log("Heads");
        headsStreak++;
    } else {
        console.log("Tails");
    }
} while (coinFlip === 0); // Continue the loop until coinFlip is 1 ie "Tails".

console.log("The heads streak was: " + headsStreak);
