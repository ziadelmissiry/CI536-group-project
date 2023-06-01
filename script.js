
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
  
  const ramInputs = ["fast", "fastest", "quick", "quickest", "RAM"];
  const storageInputs = ["storage", "space"];
  const gamingInputs = ["games", "gaming", "game"];
  const programmingInputs = ["programming","programme","coding","code"];
  const editingInputs = ["editing","edit","create","creative"];
  const generalInputs = ["general","general use","everyday","everday use"];

  const gamingLaptops = ["Alienware m15 r7","ASUS ROG Zephyrus G14","Razer Blade 15","MSI GS66 Stealth"];
  const generalLaptops = ["Dell XPS 13, ","MacBook Air, ","Lenovo ThinkPad X1 Carbon, ","Microsoft Surface Laptop 4"];
  const editingLaptops = ["MacBook Pro 16' ", "Lenovo ThinkPad P1 Gen 3, ", "Dell XPS 17, ","MSI Creator 17"];
  const programmingLaptops = ["Dell XP 15, ","MacBook Pro, ","Lenovo ThinkPad X1 Extreme, ","ASUS ZenBook Pro Duo"];
  const storageLaptops = ["Alienware m15 R7 (1TB)","HP Envy 15 (1TB)", "MSI GS66 Stealth (1TB)", "HP Envy 15 (1TB)", "Dell XPS 17 (1TB)"];
  const ramLaptops = ["MSI GS66 Stealth (32GB)", "ASUS ZenBook Pro Duo (32GB)","MacBook Pro (32GB)", "Dell XPS 17(32GB)", "Lenovo ThinkPad P1 Gen 3 (32GB)"]

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
    for(let i = 0; i < gamingInputs.length; i++) {
      let counter = 0;
      checker =  gamingInputs[i];
      if (userInput.toLowerCase().includes(checker)) {
        found = true;
        return found;
      } else {
        counter++;
      }
    }
    found = false;
    return found;
  }
  function checkRAM(userInput){
    for(let i = 0; i < ramInputs.length; i++) {
      Rchecker = ramInputs[i];
      let counter = 0;
      if (userInput.toLowerCase().includes(Rchecker)){
        found = true;
        return found;
      } else {
        counter++
      }
    }
    return found;
  }
  function checkProgramming(userInput){
    for(let i = 0; i < programmingInputs.length; i++){
      Pchecker = programmingInputs[i];
      let counter = 0;
      if (userInput.toLowerCase().includes(Pchecker)){
        found = true
        return found;
      } else {
        counter++;
      }
    }
    return found;
  }
  function checkStorage(userInput){
    for(let i = 0; i < storageInputs.length; i++){
      let counter = 0;
      Dchecker = storageInputs[i];
      if (userInput.toLowerCase().includes(Dchecker)){
        found = true;
        return found;
      } else {
        counter++;
      }
    }
    found = false;
    return found;
  }
  function checkEditing(userInput){
    for (i = 0; i < editingInputs.length; i++){
      let counter = 0;
      checker = editingInputs[i];
      if (userInput.toLowerCase().includes(checker)){
        return true
      } else {
        counter++;
      }
    }
    return found;
  }
  function checkingGeneral(userInput){
    for (i = 0; i < generalInputs.length; i++){
      let counter =  0 ;
      checker = generalInputs[i];
      if (userInput.toLowerCase().includes(checker)) {
        found = true;
        return found
      } else {
        counter++;
      }
    }
    found = false;
    return found;
  }
  function printLaptops(laptops){
    let response = '\n';
    for (let i = 0; i < laptops.length; i++){
      response += laptops[i] + '\n';
    }
    return response
  }
  startingMessage();
  function generateResponse(userInput) {
    let response = '';
      
      if (userInput.toLowerCase() === 'hello world'.toLowerCase()) {
          response = 'Hello Buddy';
      } else if (userInput.toLowerCase() === 'fuck you'.toLowerCase()) {
          response = 'this type of language is not tolerated on the internet';
      } else if (checkGaming(userInput) == true && found == true) {
        response = 'Our recomendation of gaming Laptops are: ' + printLaptops(gamingLaptops);
      } else if (checkRAM(userInput) == true && found == true) {
        response = 'Our recommendation for the laptops with the best RAM are:' + printLaptops(ramLaptops);
        printLaptops(ramInputs);
      } else if(checkStorage(userInput) == true && found == true){
        response = 'The best laptops with the best storage are ' + printLaptops(storageLaptops);
        for (let i = 0; i < dis; i++){
          response = gamingLaptops[i];
        }
      } else if(checkEditing(userInput) == true && found == true){
        response = 'Our recommendations of programming Laptops are ' + printLaptops(editingLaptops);
        for (let i = 0; i < editingLaptops; i++){
          response = editingLaptops[i];
        }
      } else if (checkProgramming(userInput) == true && found == true){
        response = 'Our recommendations of programming Laptops are ' + printLaptops(programmingLaptops);
        for (let i = 0; i < programmingLaptops; i++){
          repsonse = programmingLaptops[i];
        }
      } else if (checkingGeneral(userInput) == true && found == true) {
        response = 'If you want an everday use laptop these are our recommendations: ' + printLaptops(generalLaptops);
        for (let i = 0; i < generalLaptops; i++){
          response = generalLaptops[i];
        }
      }else {
          response = 'I am not programmed to respond to this message.';
      }

      // You can add more conditions here
      setTimeout(() => {
          sendMessage(response, 'bot-message');
      }, 1000);
  }
})

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
