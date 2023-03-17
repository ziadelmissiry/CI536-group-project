// Get the necessary DOM elements
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const chatOutput = document.getElementById('chat-output');

// Function to handle the user's message
function handleUserMessage() {
  // Get the user's message from the input field
  const userMessage = userInput.value;

  // You can add your chatbot's response logic here
  const chatbotResponse = `You said: ${userMessage}`;

  // Display the chatbot's response in the output area
  chatOutput.innerHTML += `<p>${chatbotResponse}</p>`;

  // Clear the user input field
  userInput.value = '';
}

// Add an event listener to the submit button
submitButton.addEventListener('click', handleUserMessage);
