try {

    var choice = prompt("Select 'Heads' or 'Tails'").toLowerCase();

    if (choice !== 'heads' && choice !== 'tails') {
        throw new Error("Invalid input. Please enter 'Heads' or 'Tails'.");
    }

    var coinFlip = Math.floor(Math.random() * 100);
    var coinFlipResult = coinFlip > 50 ? 'heads' : 'tails';

    if (coinFlipResult === choice) {
        alert("The flip was " + coinFlipResult + " and you chose " + choice + "...you win!");
    } else {
        alert("The flip was " + coinFlipResult + " but you chose " + choice + "...you lose!");
    }
} catch (e) {
    // Alert the user if an error occurs
    alert(e.message);
}