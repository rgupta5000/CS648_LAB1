var countStart = parseInt(prompt("Enter a number to count down from:"), 10);

// Check if the input is a valid number
if (isNaN(countStart)) {
    console.log("You did not enter a valid number.");
} else {
    for (var i = countStart; i >= 0; i--) {
        console.log(i);
    }
}
