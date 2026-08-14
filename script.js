//Toggle Menu Button...
const menu = document.getElementById ('menu');
const menuButton = document.getElementById ('menuButton');

//Toggle the menu visibility when the menu button is clicked
menuButton.addEventListener ('click', function(){
    if (menu.style.display === 'none'){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

//Alert Button...
const alertButton = document.getElementById('alertButton');

//Displayed an alert when the alert button is clicked
alertButton.addEventListener ('click', function () {
    alert('Hello! This is an alert message.');
});

//Increment and Decrement Button...
const counterDisplay = document.getElementById ('counter');
const incrementButton = document.getElementById ('incrementButton');
const decrementButton = document.getElementById ('decrementButton');
//Initialize the counter
let counter = 0;
//Increment the counter and update the display when the button is clicked
incrementButton.addEventListener ('click', function (){
    counter +=1; //Increment the counter by 1
    counterDisplay.textContent = counter; //update the counter display
});
//Decrement the counter and update the display when the button is clicked
decrementButton.addEventListener ('click', function () {
    counter -=1;  //Decrement the counter by 1
    counterDisplay.textContent = counter; //Update the counter display
});

//Reset Button...
const resetButton = document.getElementById ('resetButton');
//add an event Listener to the Reset button to refresh the
resetButton.addEventListener ('click', function () {
    location.reload (); //refresh the page
});

//Greet Me Button...
const userNameInput = document.getElementById ('username');
const greetButton = document.getElementById ('greetButton');
const greetingMessage = document.getElementById ('greetingMessage');

//Get references to the form elements

//Function to check if the input contains only letters
function isValidName (name){
    const namePattern = /^[a-zA-Z\s]+$/;
        //Regular expression to allow only letters and...
    return namePattern.test (name);
}

//Add on event listener to the button
greetButton.addEventListener ('click', function () {
    //Get the value of the input
    const username = userNameInput.value.trim();

    //Check if the input is not empty and is valid
    if (username === '') {
        greetingMessage.textContent = 'Please enter your name';
    } else if (! isValidName (username)){
        greetingMessage.textContent = 'Invalid input. Plese use only letter.';
    } else {
        //Set the greeting message
        greetingMessage.textContent = `Hello, ${username}`;
    }
});

//Add Paragraph Button....
const addParagraphButton = document.getElementById ('addParagraphButton');
const paragraphContainer = document.getElementById ('paragraphContainer');

addParagraphButton.addEventListener ('click', function (){
    //create a new paragraph element
    const newParagraph = document.createElement ('p');
    //set its text content
    newParagraph.textContent = 'Congratulations on learning Practical JaveScript!';
    //Append the paragraph to the container
    paragraphContainer.appendChild (newParagraph);
});
