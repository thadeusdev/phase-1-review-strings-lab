// Write your code in this file!
/*
index.js
    currentUser
      ✓ is defined
    welcomeMessage
      ✓ contains "Welcome to Flatbook, "
      ✓ contains the value of the 'currentUser' variable
      ✓ ends with an exclamation point!
    excitedWelcomeMessage
      ✓ contains "WELCOME TO FLATBOOK, "
      ✓ contains the value of the 'currentUser' variable
      ✓ ends with an exclamation point
    shortGreeting
      ✓ contains "Welcome, "
      ✓ contains the first initial of the name stored in the 'currentUser' variable
      ✓ ends with an exclamation point
      */
const currentUser = 'Grace Hoper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.substring(0, 1)}!`;