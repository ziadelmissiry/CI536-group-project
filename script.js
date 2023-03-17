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




//// chat bot 

const chatDisplay = document.getElementById('chat-display');
const chatInput = document.getElementById('chat-input');

chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const message = chatInput.value.trim().toLowerCase();
    chatInput.value = '';

    if (message === 'hello') {
      appendBotMessage('Hello back!');
    } else {
      appendUserMessage(message);
      appendBotMessage("I'm sorry, I didn't understand that.");
    }
  }
});

function appendUserMessage(message) {
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = message;
  chatDisplay.appendChild(userMessage);
}

function appendBotMessage(message) {
  const botMessage = document.createElement('div');
  botMessage.classList.add('bot-message');
  botMessage.textContent = message;
  chatDisplay.appendChild(botMessage);
}

