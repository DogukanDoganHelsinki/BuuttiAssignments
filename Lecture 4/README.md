# Assignments for Lecture 4


<!-- Lecture Assignments -->

## Assignment 4.1: Objective Recipes 1

Your uncle Anton has just started a new restaurant and needs to keep track of all the recipes in the upcoming menu. Let's build some recipe objects to help him stay in business!

First, we need some ingredients. Create an **object constructor** that creates ingredient objects. Every ingredient should have two properties: *name* (string) and *amount* (number). Don't worry about type checking.

Next we need the actual recipes. Create an **object constructor** that creates recipe objects. Every recipe should have three properties: *name* (string), *ingredients* (list of ingredient objects) and *servings* (number).

Finally we want to be able to get a nicely formatted version of the recipe for printing. Add a *toString* **method** that returns a string with the recipe name, amount of servings the recipe provides, and all the ingredients and amounts as a list.

Test the recipe object creator by first creating some ingredient objects, then creating a recipe object from those ingredients and printing the recipe using the toString method.


## Assignment 4.2: Objective Recipes 2

Let’s use our newfound knowledge to improve our recipes.

1. Refactor your code so that the *toString* method is declared in the prototype instead of the object constructor.
2. Add a *scale* **method** to the Ingredient prototype that scales the amount by a given factor.
3. Add a *setServings* **method** to the Recipe prototype that
    - scales each ingredient according to the difference between new and old servings value
    - sets the servings parameter

Test your code. Create some new Ingredient objects, then a new Recipe object, scale it to 100 servings, and print the resulting recipe.


## Assignment 4.3: Objective Recipes 3

Your Aunt Annie is super impressed by your recipes, so she wants to get some use of them as well. She runs a mexican restaurant that has some very hot recipes so she needs a bit extended version.

1. Create a *HotRecipe* **class** that **extends** the Recipe you have already created.
    - HotRecipe should have a *heatLevel* parameter in addition to the Recipe parameters
2. **Override** the existing toString() method with a new one that adds a warning to the recipe if the heatLevel is over 5.

Test your code. Create a new HotRecipe object with heatLevel 3 and another with heatLevel 8. Scale both to 100 portions and print the results.


## Assignment 4.4: Read/Write File

1. Implement a program that can read your given file, and print out all the information in it.
2. Print out word for word, and every time the word you’re trying to print is "joulu", you replace that word with "kinkku", and every time your printing "lapsilla" you print "poroilla". 
3. Finally, write the altered text to a new file. 

For this exercise, create a text file with this content:
```
Joulu on taas, joulu on taas, kattilat täynnä puuroo. Nyt sitä saa, nyt sitä saa vatsansa täyteen puuroo.
Joulu on taas, joulu on taas, voi, kuinka meill on hauskaa! Lapsilla on, lapsilla on aamusta iltaan hauskaa.
```


## Assignment 4.5: Forecast

Create forecast_data.json and then add to following data to it by code
const forecast = {
    day: "monday",
    temperature: 20,
    cloudy: true,
    sunny: false,
    windy: false,
};

Then retrieve the data and modify the temperature of that forecast. Lastly, save the change back to the file.


<!-- Homework Assignments -->

## Assignment 4.6: Calculator

Create a function that takes in an operator and two numbers and returns the result.

```javascript
function calculator(operator, num1, num2) {
    // your code
}

calculator("+", 2, 3) // returns 5
```

For example, if the operator is "+", sum the given numbers. In addition to sum, calculator can also calculate differences, multiplications and divisions. If the operator is something else, return some error message like ``"Can't do that!"``


## Assignment 4.7: Likes

Create a "like" function that takes in a array of names. Depending on a number of names (or length of the array) the function must return strings as follows:

```javascript
likes([]); // "no one likes this"
likes(["John"]) // "John likes this"
likes(["Mary", "Alex"]) // "Mary and Alex like this"
likes(["John", "James", "Linda"]) // "John, James and Linda like this"
likes(["Alex", "Linda", "Mark", "Max"]) // must be "Alex, Linda and 2 others 
```
For 4 or more names, ``"2 others"`` simply increases.

## Assignment 4.8: Above Average

Create a function that takes in an array and returns a new array of values that are above average.

```javascript 
aboveAverage([1, 5, 9, 3]) // [5, 9]
```

## Assignment 4.9: Count Vowels

Return the number (count) of vowels in the given string. Let's consider ``a, e, i, o, u, y`` as vowels in this exercise.

```javascript
getVowelCount('abracadabra') // 5
```


## Assignment 4.10: Check the Exam

The first input array is the key to the correct answers to an exam, like ``["a", "a", "b", "d"]``. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, **giving +4 for each correct answer**, **-1 for each incorrect answer**, and **+0 for each blank answer**, represented as an empty string.

**If the score < 0, return 0**

For example:

```
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6  
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7  
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16  
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 
```


## Assignment 4.11: Credential Generator

Create a function (or multiple functions) that generates **username** and **password** from given **firstname** and **lastname**.

**Username**: B + last 2 numbers from current year + 2 first letters from both last name and first name in lower case 

**Password**:  1 random letter + first letter of first name in lowercase + last letter of last name in uppercase + random special character + last 2 numbers from current year

Get to know to **ASCII table**. Random letters and special characters can be searched from ASCII table with **String.fromCharCode()** method with indexes. For example **String.fromCharCode(65) returns letter A.**

Hints: 
Generate random numbers (indexes) to get one random letter and one special character. Use **range of 65 to 90 to get the (uppercase) LETTER** and **33 to 47 to get the SPECIAL CHARACTER**. Notice, that these are not the only "special characters", but using this range is acceptable for this exercise. Use build-in function to get the current year.

Links: http://www.asciitable.com/

```javascript
generateCredentials('John', 'Doe') // [ 'B22dojo', 'KjE,22' ]
```


## Assignment 4.12: Collatz Conjecture

Define a number n that is larger than 0, for example ``n = 3``

Create a function that **given parameter n finds the number of steps it takes to reach number 1 (one)** using the following process

- **If n is even, divide it by 2**  
- **If n is odd, multiply it by 3 and add 1**  

Example: 

For ``n = 3`` the process would be following
0: n<sub>0</sub> = 3
1: 3 is odd, so we multiply by three and add one. n<sub>1</sub> = n<sub>0</sub> * 3 + 1 = 10
2: 10 is even, so we divide by two. n<sub>2</sub> = n<sub>1</sub> / 2 = 5
3: n<sub>3</sub> = n<sub>2</sub> * 3 + 1 = 16
4: n<sub>4</sub> = n<sub>3</sub> / 2 = 8
5: n<sub>5</sub> = n<sub>4</sub> / 2 = 4
6: n<sub>6</sub> = n<sub>5</sub> / 2 = 2
7: n<sub>7</sub> = n<sub>6</sub> / 2 = 1
So we reach n = 1 after seven steps.

You can read more about the **Collatz conjecture** from [Wikipedia](https://en.wikipedia.org/wiki/Collatz_conjecture) or [XKCD](https://xkcd.com/710/).