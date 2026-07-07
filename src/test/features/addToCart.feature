Feature: Add to cart tests

Background:
Given User navigates to the application

Scenario Outline: Login should be success
And User click on the login link
And User enter the username as "nikhilthombare"
And User enter the password as "Nikhil@123"
When User click on the login button
Then Login should be success

And user search for "<book>"
And user add the book to the cart
And the cart badge should get updated

Example:
|book|
| simple |
| Wild |