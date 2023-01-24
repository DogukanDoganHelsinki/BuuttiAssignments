# Assignments for Lecture 15


## Assignment 15.1: What is a SPA?

Many of the sites we use daily are single page applications. To better illustrate what this means, go to https://www.google.com/maps and add Utsjoki as one of your favorite places and pay close attention to when/if the page (re)loads. For added clarity (or confusion), have the browser developer tools’ (F12) network tab open while doing this.


## Assignment 15.2: Create a React App

Create a new React project with the command
```
npm init vite@latest
```
Install the dependencies and then run it with 
```
npm run dev
```
See that the project was created properly (http://127.0.0.1:5173/).
- Take a quick look at the source code
- Install React Dev Tools (if you have not done so already)
- Take a look at your browser’s Developer Tools 
and React Dev Tools


## Assignment 15.3: Create Some Components

Continue developing the app you created in the previous assignment.
Remove all code from within App() function in App.jsx. Using this as a blank template, create a component that takes string “Hello React!” as an argument and renders it inside a `<h1>` element.
**Extra**: Also create and simultaneously render a 2nd element that takes no arguments, but displays “It is year {currentYear}” in `<h2>`.
Hint: Use `new Date().getFullYear()`


## Assignment 15.4: An Alternating List

Create a component that takes list
```
const namelist = ["Ari", "Jari", "Kari", "Sari", "Mari", "Sakari", "Jouko"]
```
as an argument and renders each name on its own row so that every other name is bold and the remainders cursive.
**Hint**: Lists can include elements:  `const elementArray = [<b>Hello</b>, <i>Hi</i>]`


## Assignment 15.5: Counters

Create an app with three buttons. Each button should have the number zero on them. When a button is clicked, the number in that button should increase by one.
Below the buttons there should also be a number that equals the sum of all the numbers in the buttons.


## Assignment 15.6: User Input

Create a component with `<input>` and `<button>` elements. When the button is clicked, the inputted text should be displayed in a different element, but only *after* clicking the button.


<!-- Homework Assignments -->

## Assignment 15.7: Todo application

Create a React application with an input bar and a button to add a new Todo item, and a view to see all todos in the list
- Each item should be toggleable for done or not done
- Each added item to the list should also be able to be removed / discarded

- **Extra** Give the UI a nice look

## Assignment 15.8 - Tic Tac Toe

Create a Tic Tac Toe game in React. The game should have 3x3 board, and when the user clicks a board square the appropriate symbol (X or O) should appear. 
 - The Player should change automatically, so in consecutive clicks, first one marks X, the second one O, the third again X and so on.
 - Current player should be visible
 - Players should not be able to select already selected squares
 - If all the squares are taken, the game should inform the players that the game is over
 - The game should have a reset button that restarts the game

**Extra**: Make the game keep track if one player has won. When one of the players gets a streak of three, either vertically, horzontally, or diagonally, the game should end. At this point game informs players which player has won. No more moves can be made at this point.

## Extra Assignment 15.9: Memory game (difficult)

Create a memory game, i.e. you have 16 cards, or 8 pairs of cards, with some symbols or images (you choose). When the game starts, every card should be the same, and then the player can click one card to reveal it, then click another card to reveal it too. If the cards are the same, they should be removed. If the cards are not the same, they should be hidden again.
- **EXTRA:** Allow the player to choose the amount of cards to be played with between 2 pairs (4 cards) and 32 pairs (64 cards).
- **EXTRA:** Count the number of tries to complete the game.
- **EXTRA: (harder)** Add some animation when the cards open/close, meaning they don't instantly just flash open or close, but are revealed over 1 second in some animation.