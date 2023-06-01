
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
  
  const laptopInputs = ["programming", "coding", "editing", "everyday use", "general use"];
  const ramInputs = ["fast", "fastest", "quick", "quickest", "RAM"];
  const displayInputs = ["best screen", "best display", "screen", "display"];
  const gamingInputs = ["games", "gaming", "game"];
  const programmingInputs = ["programming","programme","coding","code"];
  const editing = ["editing","edit","create","creative"];
  const generalInputs = ["general","general use","everyday","everday use"];

  const gamingLaptops = ["Alienware m15 r7","ASUS ROG Zephyrus G14","Razer Blade 15","MSI GS66 Stealth"];
  const generalLaptops = ["Dell XPS 13, ","MacBook Air, ","Lenovo ThinkPad X1 Carbon, ","Microsoft Surface Laptop 4"];
  const editingLaptops = ["MacBook Pro 16' ", "Lenovo ThinkPad P1 Gen 3, ", "Dell XPS 17, ","MSI Creator 17"];
  const programmingLaptops = ["Dell XP 15, ","MacBook Pro, ","Lenovo ThinkPad X1 Extreme, ","ASUS ZenBook Pro Duo"];
  const ramLaptops = ["",""];



  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const chatOutput = document.getElementById('chat-output');
  function startingMessage() {
    chatOutput.innerHTML += '<p>What kind of laptop are you looking for?</p>';
  };

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
  /// goes through the item by item checking if string from the list is included in userInput
  /// if it does it gets the position of that item in that list
  let found = false;
  function checkGaming(userInput) {
    for(let i = 0; gamingInputs.length; i++) {
      checker =  gamingInputs[i];
      if (userInput.toLowerCase().includes(checker)) {
        found = true;
        return true;
      }
    }
    return false
  }
  function checkRAM(userInput){
    for(let i = 0; ramInputs.length; i++) {
      Rchecker = ramInputs[i];
      if (userInput.toLowerCase().includes(Rchecker)){
        found = true;
        return true;
      }
    }
    return false;
  }
  function checkProgramming(){
    for(let i = 0; programmingInputs.length; i++){
      Pchecker = programmingInputs[i];
      if (userInput.toLowerCase().includes(checker)){
        found = true
        return true;
      }
    }
    return false;
  }
  function checkDisplay(){
    for(let i = 0; displayInputs.length; i++){
      Dchecker = displayInputs[i];
      if (userInput.toLowerCase().includes(checker)){
        return true
      }
    } 
    return false;
  }

  startingMessage();
  function generateResponse(userInput) {
    let response = '';
      
      if (userInput.toLowerCase() === 'hello world'.toLowerCase()) {
          response = 'Hello Ziad';
      } else if (userInput.toLowerCase() === 'fuck you'.toLowerCase()) {
          response = 'this type of language is not tolerated on the internet';
      } else if (checkGaming(userInput) == true) {
        response = 'Our reccomendation of gaming Laptops are:' + gamingLaptops;
      } else if (checkRAM(userInput) == true) {
        response = 'best ram inputs';
      } else if(checkDisplay(userInput) == true){
        response = 'the best display laptops';
      } else if(checkProgramming(userInput) == true){
        response = 'best gaming laptops';
      } else if (programmingInputs.includes(userInput) && programmingInputs.indexOf(userInput) !== -1){
        response = 'Our recommendations of programming Laptops are ' + programmingLaptops;
      } else {
          response = 'I am not programmed to respond to this message.';
      }

      // You can add more conditions here
      setTimeout(() => {
          sendMessage(response, 'bot-message');
      }, 1000);
    }
})
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
;
startingMessage();