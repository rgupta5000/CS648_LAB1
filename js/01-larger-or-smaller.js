try {
    var firstNumber = parseInt(prompt("Enter the first integer: "), 10);
    var secondNumber = parseInt(prompt("Enter the second integer: "), 10);
  
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      throw new Error("One or both inputs are not valid numbers.");
    }
  
    // Compare the two numbers and display the larger one, or state that they are equal
    if (firstNumber > secondNumber) {
      alert("The larger number is: " + firstNumber);
    } else if (firstNumber < secondNumber) {
      alert("The larger number is: " + secondNumber);
    } else {
      alert("Both numbers are equal.");
    }
  } catch (e) {
    // Display error message if an error occurs
    alert("An error occurred: " + e.message);
  }
  