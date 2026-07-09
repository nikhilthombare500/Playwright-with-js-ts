Feature: Add to cart tests

Background:
Given User navigates to the application

Scenario Outline: Add to cart functionality
And User enter the username as "anshika@gmail.com"
And User enter the password as "Iamking@000"
When User click on the login button

And user add the "<Product>" to the add to cart
And the cart badge should get updated

Example:
|Product|
| ADIDAS ORIGINAL |
| iPhone QA Max |