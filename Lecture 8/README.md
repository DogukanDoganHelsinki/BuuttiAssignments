# Lecture 8 Assignments

<!-- Lecture Assignments -->

## Assignment 8.1: Test with Jest

Create a copy of your solution to the exercise 4.6: Calculator. 

Write tests for multiplication. Remember to include the “difficult”, and borderline cases.

## Assignment 8.2: Describe Syntax

Continue building your test suite to the calculator. Write tests for the division, this time **using the describe/it syntax**. Again, remember the “difficult” cases.

## Assignment 8.3: Test Coverage

Run your calculator tests with `--coverage` flag. See what parts of your calculator are being tested and what are not.

Write more tests to get 100% coverage.

## Assignment 8.4: Test Pipeline

- Create a Gitlab project for the calculator.
- Add ESLint and make sure the linter runs locally without issues
- Add .gitlab-ci.yml file that
    - Has stages for building, linting and testing
    - Has a common cache for node modules
- Push your changes to Gitlab and make sure that all the stages run successfully.


## Assignment 8.5: Meet the Team

Gather into the two teams you were assigned to in the beginning of the course.
Introduce yourselves and tell the following things about your scrum experience
- Have you heard about Scrum? Where?
- Have you participated in Scrum team? In which role?
- On a scale from 0 to 10, how well do you understand each role? Grade each role separately!


## Assignment 8.6: Artifactory

Each team member writes down six imaginary product backlog items on six separate pieces of paper. The items are gathered on a pile in the center of the table.
One by one, the items are picked up and evaluated by the team (the writer included). You should answer the questions 
1) Why is this a good PBI?  
2) Why is this not  a good PBI? 
3) Is it good enough to be added to your imaginary backlog? If so, add it to your backlog.

From your backlog, select items for a single sprint. Be prepared to explain why you chose these items.

## Assignment 8.7: Different Events

As a group, discuss:
- What makes a good daily?
- What is the difference between a sprint review and a sprint retrospective
- What are the greatest challenges in sprint planning

<!-- Homework Assignments -->

## Assignment 8.8: Command Line Converter

Write a command line unit converter that converts between volume units. Your converter should accept at least units deciliter, liter, ounce, cup, and pint.

The program takes three parameters: amount, source unit, and the target unit. For example
```convert 6 dl oz --> 20```

Write tests for your converter. Include at least five tests!


## Assignment 8.9: Converter Pipeline

Create a Gitlab repository for the converter. Add ESLint and build a pipeline that lints and tests the code when it's pushed to the repository.

## Assignment 8.10: Group Roles

Discuss with your group who will be assigned what role in your Scrum process. You will need one *product owner* and one *scrum master*. Review what is expected of these roles, and assign the roles together. Report your desicions to the instructor in your group's Discord channel.

## Assignment 8.11: Prepare for the Project

You will be using [MyHelsinki Open API](https://open-api.myhelsinki.fi) in your project. Get to know the API by reading through the documentation and making some test requests to it using Insomnia/Postman.
