// // Get the necessary DOM elements
// const userInput = document.getElementById('user-input');
// const submitButton = document.getElementById('submit-button');
// const chatOutput = document.getElementById('chat-output');

// // Function to handle the user's message
// function handleUserMessage() {
//   // Get the user's message from the input field
//   const userMessage = userInput.value;

//   // You can add your chatbot's response logic here
//   const chatbotResponse = `You said: ${userMessage}`;

//   // Display the chatbot's response in the output area
//   chatOutput.innerHTML += `<p>${chatbotResponse}</p>`;

//   // Clear the user input field
//   userInput.value = '';
// }

// // Add an event listener to the submit button
// submitButton.addEventListener('click', handleUserMessage);




//// chat bot 

document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const chatOutput = document.getElementById('chat-output');

  sendButton.addEventListener('click', () => {
      const input = userInput.value;
      userInput.value = '';
      sendMessage(input, 'user-message');
      generateResponse(input);
  });

  userInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          const input = userInput.value;
          userInput.value = '';
          sendMessage(input, 'user-message');
          generateResponse(input);
      }
  });

  function sendMessage(text, className) {
      if (text.trim() !== '') {
          const messageElement = document.createElement('div');
          messageElement.classList.add('message', className);
          messageElement.textContent = text;
          chatOutput.appendChild(messageElement);
          chatOutput.scrollTop = chatOutput.scrollHeight;
      }
  }

  function generateResponse(userInput) {
      let response = '';

      if (userInput.toLowerCase() === 'hello world'.toLowerCase()) {
          response = 'Hello Ziad';
      } else {
          response = 'I am not programmed to respond to this message.';
      }

      // You can add more conditions here

      setTimeout(() => {
          sendMessage(response, 'bot-message');
      }, 1000);
  }
});