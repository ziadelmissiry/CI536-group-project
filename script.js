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

    if (userInput.toLowerCase() === 'hello world') {
      response = 'Hello!';
    } else if (userInput.toLowerCase().includes('recommend a laptop')) {
      response = getLaptopRecommendation(userInput);
    } else {
      response = 'I am not programmed to respond to this message.';
    }

    // You can add more conditions here

    setTimeout(() => {
      sendMessage(response, 'bot-message');
    }, 1000);
  }

  function getLaptopRecommendation(userInput) {
    const laptops = [
      { name: 'Laptop A', useCase: 'gaming' },
      { name: 'Laptop B', useCase: 'programming' },
      { name: 'Laptop C', useCase: 'video editing' },
      { name: 'Laptop D', useCase: 'general use' },
    ];

    const recommendation = laptops
      .map((laptop) => {
        if (userInput.toLowerCase().includes(laptop.useCase)) {
          return `For ${laptop.useCase}, I recommend ${laptop.name}.`;
        }
        return null;
      })
      .filter((item) => item !== null)
      .join('\n');

    return recommendation || "I couldn't find a recommendation based on your input. Please try again.";
  }
});
