# Assignments for Lecture 3

<!-- Lecture Assignments -->

## Assignment 3.1: toUpperCase

Write a function that takes in a string and converts the first letter of each word to upper case.


## Assignment 3.2: Random Number

Write a function that generates random number within a range, range rounded to nearest integer. Function takes in two numbers, min and max.

**Extra**: Add documentation to the function: what the function does, what are its parameters (and their types) and what does the function return.

**Hint**: Math


## Assignment 3.3: Factorial

Write a program that calculates the **factorial** n of a given number **n**

Definition of factorial of n, written as n!, is 
```
n! = n * (n-1) * (n-2) * ... * 1
```
So for example, if n = 4, then n! = 4 * 3 * 2 * 1 = 24


## Assignment 3.4: Array Manipulation
```
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
```
From the elements of this array, 
1. Create a new array with only the numbers that are divisible by three.
2. Create a new array from original array (arr), where each number is multiplied by 2
3. Sum all of the values in the array using the array method *reduce*

After each step, console.log the result.


## Assignment 3.5: Non-repeating Character

Find the first **non-repeating** character from a string.

For example, in "aabbooooofffkkccjdddTTT" it would be "j".


## Assignment 3.6: Merging Arrays

Create a program that joins two arrays together. If the same value appears in both arrays, the function should return that value only once. 

For example, if we have arrays ``[1, 2, 3, 4]`` and ``[3, 4, 5, 6]``, then the program should return ``[1, 2, 3, 4, 5, 6]``.

**Extra**: Use different ways to join the arrays: Get to know **Array.concat()** method and the **spread syntax**.


## Assignment 3.7: Lottery

Create a program that generates **seven random numbers** from 1 to 40. Numbers must be **unique**. The program should return an array of the lottery numbers.

**Extra**: Print put each number with one second delay
**Hint for extra**: get to know setTimeout()


## Assignment 3.8: Fibonacci Sequence

The Fibonacci sequence is a sequence of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. Create a function that produces a Fibonacci sequence of length **n**.

For example, if n = 8, the program should produce a sequence [0,1,1,2,3,5,8,13].

## Assignment 3.9: Prime Numbers

A prime number (or a prime) is a natural number (aka positive integer) greater than 1 that is not a product of two smaller natural numbers. For example, 4 is not a prime because it is divisible by 2. On the other hand, 7 is a prime: it is only divisible by 7 and 1.

Create a function that checks whether a given number is a prime number.


## Assignment 3.10: Runway Numbers

Suppose airport runways are given numbers determined by the direction in which planes travel as they move along the runways. The number is found by taking the bearing in degrees and rounding to the nearest 10 degrees and then dropping the last 0. For example, if the bearing along the runway would be 267.5 degrees, it would be first rounded to 270 degrees and then discarded the last zero to get 27.

Write a program where the user tells the bearing (0-360deg) and the program outputs the corresponding runway number (Oddly this airport has 36 runways.)
	
**Restriction**: Don’t use round(), floor() or ceil() functions here! (**Hint**: the modulo operator might help instead.)


<!-- Homework Assignments -->


## Assignment 3.11: Count Sheep

Create a program that takes in a number from the command line, for example ``node .\countSheep.js 3`` and prints a string ``"1 sheep...2 sheep...3 sheep..."``


## Assignment 3.12: Indexed Alphabet
```
const charIndex = { a : 1, b : 2, c : 3, d : 4, e : 5, ... , y : 25, z : 26 }
```

Create a program that turns any given word into charIndex version of the word

Example:  
``node .\charIndex.js "bead"`` ->  2514  
``node .\charIndex.js "rose"`` ->  1815195  


## Assignment 3.13: Ordinal Numbers

You have two arrays:
```
const competitors = ['Julia', 'Mark', 'Spencer', 'Ann' , 'John', 'Joe']
const ordinals = ['st', 'nd', 'rd', 'th']
```

Create program that outputs competitors placements with following way:
`['1st competitor was Julia', '2nd competitor was Mark', '3rd competitor was Spencer', '4th competitor was Ann', '5th competitor was John', '6th competitor was Joe']`


## Assignment 3.14: Range Within

Write a program that takes in any two numbers from the command line, `start` and `end`. The program creates and prints an array filled with numbers from `start` to `end`.

Examples:  
``node .\createRange.js 1 5`` -> `[1, 2, 3, 4, 5]`  
`node .\createRange.js -5 -1` -> `[-5, -4, -3, -2, -1]`  
`node .\createRange.js 9 5` -> `[9, 8, 7, 6, 5]`  

Note the order of the values. When `start` is smaller than `end`, the order is **ascending** and when `start` is greater than `end`, order is **descending**.

## Assignment 3.15: Reversed Words

Create a programs that reverses each word in a string.

`node .\reversed_words.js "this is a very long sentence"` -> `sihT si a yrev gnol ecnetnes`

## Assignment 3.16: Palindrome

Check if given string is a palindrome.

Examples:   
` node .\palindrome.js saippuakivikauppias` -> `Yes, 'saippuakivikauppias' is a palindrome`
` node .\palindrome.js saippuakäpykauppias` -> `No, 'saippuakäpykauppias' is not a palindrome`  

## Assignment 3.17: Array Randomizer
```
const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];
```

Create a program that every time you run it, prints out an array with differently randomized order of the array above.

Example:  
``node .\array_randomizer.js`` -> ``[5, 4, 18, 32, 8, 6, 2, 25, 14, 10]``
