# Assignments for Lecture 1

<!-- Lecture Assignments -->

## Assignment 1.0: Before We Begin

Make sure you have a working development environment:
- A command prompt available
- VS Code installed
- Node.js installed

Test your Node installation from the command prompt with ```node –version```
If you get correct version information, you’re ready to go!


## Assignment 1.1: Starting Out

- Create a working directory for your JavaScript exercises
- Create a Hello world script


**Important**: name your files well! (instead of asdasd.js, use something like exercise1.1.js) 

Open **command prompt** and go to the working directory (you can also use VSC’s terminal window for this)

**Run** the script!


## Assignment 1.2: Basic Math

Create a program that has **two numbers, a and b** (decide the value for these freely).
1. Calculate the **sum**, **difference**, **fraction** and **product** of these numbers.
2. **console.log** the results.

**EXTRA**: Calculate the **exponentiation** and **modulo** of  a and b.

Calculate and log the **average** of a and b.

**EXTRA 2**: Read a and b from the command line.


## Assignment 1.3: Working with Strings

Write a program which has **two strings, str1 and str2**.
- Create **a combined string, str_sum**, by using the + operator or using template string and console.log the result.
- Check the **length** of these strings using the ".length" property, e.g., str1.length or str2.length ( try console.logging these ).
- Calculate **str_avg, the average** of str1.length and str2.length
- Create **if statements** where you check the length of str1, str2 and str_sum and console.log the strings *only* if their length is *smaller* than str_avg.

## Assignment 1.4: If Conditionals

By using a *single* **if conditional**, write the following conditions:
- The game hearts can only be played with 4 people (playerCount)
- Mark is happy when he is not stressed or if he has ice cream (isStressed, hasIcecream)
- It is a beach day if the sun is shining, it is not raining and the temperature is 20 degrees Celsius or above
- Arin is happy if he sees either Suzy or Dan on Tuesday night. However, seeing them both at the same time, or being alone, makes him sad.


## Assignment 1.5: Modifying Strings

Write a program that takes in a string of arbitrary length (example ``node .\modifying-string.js "super cool morning and hello world"``) and outputs a modified string that
1. has no white spaces in the beginning or end
2. has a maximum length of 20
3. never starts with a capital letter

**EXTRA**: Modify your program to check the conditions instead of modifying the input. If the input string does not meet these conditions, the program outputs an error message as a string (Even if you do how to throw an Error, don’t do it here).


<!-- Home Assignments -->


## Assignment 1.6: Discounted Price

Create variables for **price** and **discount** and assign some values for those. Calculate and console.log **discounted price**.

## Assignment 1.7: Travel Time

Create variables for **distance** (kilometers) and **speed** (km / h). Calculate and console.log **travel time**.

## Assignment 1.8: Seconds in a Year

Calculate how many seconds there are in a year. Use variables for **days, hours, seconds and seconds in a year**. Print out the result with console.log.

## Assignment 1.9: Area of a Square

Create a program that takes in a **number from command line** that represents a length of a squares sides. Calculate the **area** of the square with given number.

A square with sides of length 5m is 25 square meters in area.

**Hint 1**: Command line arguments are found in an array called:

``process.argv``

```javascript
const a = process.argv[2];
const b = process.argv[3];

console.log(a); // food
console.log(b); // beer
```

``node filename.js food beer``


**Hint 2**: In this exercise you will run for example ``node square.js 5``