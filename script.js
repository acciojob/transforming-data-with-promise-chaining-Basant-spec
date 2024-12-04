// Select the elements from the DOM
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Function to create a delay and resolve with the given value
function delay(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

// Add an onClick event listener to the button
button.addEventListener("click", () => {
  // Get the input value and parse it as a number
  const number = parseFloat(input.value);
  
  // Validate the input
  if (isNaN(number)) {
    outputDiv.textContent = "Please enter a valid number!";
    return;
  }

  // Step 1: Start the promise chain
  delay(2000, number)
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delay(1000, result * 2); // Multiply by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delay(1000, result - 3); // Subtract 3
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delay(1000, result / 2); // Divide by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delay(1000, result + 10); // Add 10
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      // Handle any errors that occur in the chain
      outputDiv.textContent = `Error: ${error.message}`;
    });
});
