# Introduction

Since the world started revolutionising laptop shopping, people still tend to struggle when they
decide to get a new laptop. Our idea is to make it easy for people to choose a laptop based on
their own preferences by making an advanced project using HTML, CSS and JavaScript. Our
laptop recommendation chatbot gives the user multiple types of laptops to choose from so that
the user doesn’t get confused when buying a laptop.
It processes a wide variety of choices such as a laptop’s storage and ram. Also, the user can
ask the chatbot simple questions about the usage of the laptop like a laptop for gaming, video
editing, programming and also a choice of general use for users that don't have a specific
preference for their laptop purchase.
As a team, we worked together and split the work so that each member has an equal amount of
work to do. In other terms, it was a fair project that led us to develop our teamwork skills and
how to communicate in an effective and productive manner. Whatsapp and group meetings
were arranged to elevate the quality of work we provided. The team took advantage of doing
such a project since it gave us the chance to show teamwork skills and how to face it to
overcome obstacles within the code itself. In-person meetings and social media chats showed
us working together as a group can make such a project easier and more efficient to achieve.
Our laptop recommendation chatbot gives you multiple choices considering your preferences. It
will guide you through choosing the perfect laptop that suits you with a simple design and a
friendly interface that makes it easier for users to access, contact and learn more about laptops.
We have made sure that our laptop preferences are all up to date by seeking online materials
that suggest what each laptop is perfect at.
Also, we managed to make the chatbot family friendly and so we have ensured that swear
words and cussing is not allowed. The chatbot will automatically respond with a message saying
“ this type of language is not tolerated”. This feature makes our website different from other
websites and all kinds of ages are allowed to use it.

# Screenshots of the website:

# Chatbot Methodology
The methodology of the chatbot is as follows. Project management we used Trello as well as
whatsapp to communicate, fixes and ideas for the program. We also used these to suggest
design changes and suggestions. On the Trello a mind map was developed to aid the process
of development. This was effective for a short time as the program was quickly altered to be
more user friendly.
More on the project management, regular meetings were set up in the Trello which would
consist of either coming into the Friday lesson with Michalis or doing work at home or from the
University library. There was also a todo list that was setup and a research and deadline list. All
of which will be shown in the appendix.
Development tools and environments used were mainly Visual Studio Code. This was the
program used as it is most familiar to the group and is widely known to be the go to software for
web development - which is what our chatbot was to be housed in. As mentioned above this
was a comfortable environment for the group so we were all able to integrate code into the
program and use GitHub as well to push and pull code from each other when a member made
an alteration.
The testing method used was black box testing, this is mentioned below as well but I will give a
quick rundown of what black box testing is and how it is utilised within our code. Black box
testing is a testing technique used for software which focuses on the external behaviour and
functionality of a software system. It was utilised within our code by a specific user input and
then the program will provide the desired output. To be more specific the design output would be
the list of recommended laptops based on the users specific input.

# Product Description
## Requirements document
### User requirements

Our chatbot should offer a user-friendly interface for all users to interact with, it should also be a
simple and easily navigated chatbot in order to allow people of all ages and understanding of
technology to use it. Users should be able to express their preferences in the laptop suchas,
storage size, speed and purpose of laptop. It should ask relevant questions in order to gain as
much information about the user's needs.

### System requirements
The website and chatbot will be written in HTML, CSS and JavaScript. It should be usable on a
range of devices and browsers to increase portability. It should be hosted on a reliable
server/domain. Comments should be used in the code in order to increase maintainability
incase of errors so that other programmers are able to understand the purpose of the code and
easily fix the problem. This will decrease downtime and increase user traffic.

## Functional requirements

The chatbot should have several laptop models with different specifications in order to have
enough options for the user to choose from and the chatbot to suggest in order to offer the best
result. These specifications and details should be shown to the user so that they can see what
laptop specs we recommend, this allows them to compare to current devices they own or other
devices they may be interested in purchasing. The chatbot should be able to handle inputs from
a user which are not exact, for example , they do not need to say “i want a laptop for gaming”,
instead, just saying “gaming” should return the same result. This will be done by programming
keywords into the system in order to allow several different inputs for the same result. The
website should include a contact page in which users can ask for assistance or report any errors
or bugs.

### Non-functional requirements

The chatbot should be responsive in design which can be used on different screen sizes and
devices, it should also ensure a good design and user friendly interface. It should be easy to
navigate and headings should be clear. The chatbot should have security measures to ensure
data protection and prevent unauthorised access. It should be hosted and programmed in a way
which provided fast load and responses to the user to increase customer satisfaction.

## Designs: interface and software:

experience and conveys positive branding. This section will discuss the key aspects of our
chatbots design and interface, this will include layout, colour , user interface and overall design
style.
When it came to the design of the interface, we came together as a group early on in the
development and discussed various design options. We decided to go with a minimalistic design
for our chatbot in order to focus the attention more on the purpose of the software. This design
used a container named “#chatbot-container”, this container featured a clean appearance with a
border with square edges to enhance the design and make it more sleek. We set the
background to a clean white to provide contrast to the surrounding elements.
This was done using the following CCS code:

<img width="198" alt="css code" src="https://github.com/user-attachments/assets/d9984697-a1f6-44c8-aa18-99311818fe1e" />

This was the resulting appearance of the above CCS code combined with the HTML of the
index page.

<img width="803" alt="css appearnace" src="https://github.com/user-attachments/assets/5b63c651-10d2-4fd9-bdbd-8fafd413ee70" />

### Layout

The layout of a website is important in ensuring navigation is easy to use and important
information is highlighted. We ensured that the title of the chatbot was central by using CSS to
centre the h1 element. We also ensured the navigation links were central to the webpage to
make them easily located on the screen. To ensure that our program works on several different
devices, we ensured to make the webpage fully responsive. We did this by using the following
code:

<img width="502" alt="layout code" src="https://github.com/user-attachments/assets/b6c95002-ce1b-473c-8a9b-0eb1e2dce224" />

This code affects the viewport which is the area of the browser which shows the webpage. The
content="width=device-width” ensures that the website adapts to different screen sizes so that
the content is still viewable on as many devices as possible, expanding our reach to more
people.
Furthermore, we used a class by the name of “.contact-form” on the contact to ensure that the
form for data entry is central and the text fields are all inline with each other to improve design.
This also aids the user in easily locating and filling in the required forms. Below is the code and
the resulting output of the changes.

<img width="372" alt="layout 2" src="https://github.com/user-attachments/assets/afdae2fe-322e-4e2e-95c8-169d7fdf891a" />


### Colour scheme

The colours used on a website and where they are placed are vital in creating a brand identity
and enhancing usability. To bring attention to the chatbot, we used a white background for the
chatbot container, and a darker background for the rest of the website in order to bring focus to
the chatbot. To add some colour to the webpage we made the send button for the chatbot blue
and matched it with the header colour to have synchronicity across the website. This blue
element is carried into other small elements of the webpage to create some accents.
The colour was changed using the following CSS code:

<img width="192" alt="color scheme" src="https://github.com/user-attachments/assets/f0c61771-39d7-47c1-a92b-0d38df1652ee" />

### Typography

The way large amounts of words and content on the website are presented have a huge effect
on the outcome. Good typography can help to increase readability of the website which is
crucial. Also, font sizes, styles and placement are important to make headings and titles more
readable. We ensured that our headings were bold and larger font than the other content on the
web page in order to make them stand out and be clearer for the user. We used Arial font as it is
a widely supported sans-serif on many devices to increase usability. The line height is set at 1.6
to ensure legibility and allow the user comfortable reading. Spacing between fonts can also help
people with visual deficiencies to have an easier and better experience. Here is the home page
where you can see different sizes and styles of text.

<img width="300" alt="Typography" src="https://github.com/user-attachments/assets/4e71837b-6bfa-4168-b40f-bf439be6e666" />

### User Interface Elements

The elements on a website help guide the user as well as allow interactivity. UI elements include
buttons, text boxes, forms, navigation links, and much more. The contact form, used to receive
feedback from users, uses labels, fields and textboxes. These all have a width of 30% which
keep the design consistent and clean. It also provides the user a good amount of space to input
their details clearly so they can see if they have made any errors. We used labels above each of
the text fields to clearly identify the purpose of each field. The message text field also is adjustable so that the user can read their full message before submitting to check for errors. To
submit the form we placed a blue “submit” button to allow the user to submit their feedback at
the click of a button. The blue button also matches the theme of the website, further increasing
brand identity and consistency. These text boxes and buttons are also used on the main
chatbot.

<img width="320" alt="search bar" src="https://github.com/user-attachments/assets/a89885ba-8687-4551-844e-5b94b7201c54" />

# Conclusion

In conclusion, our design and interface is visually appealing and elements are put together well
to create a consistent and smooth webpage. The colour scheme, typography and layout put
together create an engaging and user friendly experience. The chatbot is designed in a way
which pops out to the user, highlighting the main purpose of the webpage. Overall, our website
demonstrates a professional and easily readable design.


## Implementation:

The architecture we are using is DOM( Document Object Model). The purpose of this is to set
up event listeners to take a user's input using a submit or enter button. Then, with the use of
functions we are able to make a functioning chatbot that responds to the users inputs.
At the start I begin creating the arrays. One set of arrays that will be used to match up to the
user's input. These arrays each represent a different type of input that can be considered for the
6 different types of laptops that are being taken into consideration. The other set of arrays are
made to correspond with the type of inputs that can be received from the user. The 6 types of
laptops we are using are gaming laptops, programming laptops, general use/everyday use
laptops, editing laptops, laptops with high RAM and laptops with high storage.
The DOM elements of the programme are the user input field, submit button and the chat output
area. There are event listeners added to the submit button and the user input field and the enter
button. When the enter button is pressed or the submit button is pressed the user’s message is
retrieved, the input field is cleared and the function sendMessage displays the user’s message
in the output area.
The helper functions in the program are ‘checkGaming’, ‘checkRAM’, ‘checkProgramming’,
‘checkStorage’, ‘checkEditing’ and ‘checkGeneral’. Helper functions in JavaScript are functions
that you call upon in your programme and act as a template for the program.These functions all
follow the same premise by using an iterative loop. The loop conditions are that i starts at 0 and
increases each time the ‘i’ increases by 1 at the start of each loop and the loop will break once
‘i’ is no longer less than the size of the array. The function sets the item in the input array to a
checker variable that will change every iteration. Then using the comparative if statement we will take the user’s input as the main string and use checker as substring and see if the
substring in assigned the the checker variable is stated in the user’s. If this is true then set our
boolean found to true and return its value so that it can be used outside of the function.
The function ‘printLaptops’ also uses a ‘for’ with its condition being that ‘i’ must be less than the
list size. For each iteration it sets a response to each item in the list.
The function ‘generateResponse’ is called with the user’s input. Using the comparative ‘if’, ‘else
if’ and ‘else statements, as each one calls a function to check for 6 different types of inputs that
could be and the corresponding response necessary to the input. This could be by the response
being on of the types of computers or the user’s message not meeting any of the requirements
thereby saying that the bot is not programmed to respond to the message.

## Testing:

Black box testing is one form of testing. It is a software testing
technique that focuses on the external behaviour and
functionality of a software system without considering its internal
structure or implementation details. It is called ‘black box’
because the tester doesn’t have all the information or knowledge
of the internal workings of the system being tested. Instead, the
tester treats the software as a ‘black box’ and tests it based on
the inputs and expected outputs.
In black box testing the person testing primarily is focussed on
making sure the software is functional. Ensuring this means that
the specified requirements are met and the program behaves
correctly. Some advantages of using black box testing are the
independence involved as well as the simplicity of using black
box testing. Black box testing also allows for comprehensive
evaluation of the system, which in turn covers various scenarios
and input combinations







