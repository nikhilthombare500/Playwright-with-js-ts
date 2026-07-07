Feature: User Authentication tests

Background:
Given User navigates to the application

Scenario: Login should be success
And User enter the username as "anshika@gmail.com"
And User enter the password as "Iamking@000"
When User click on the login button
Then Login should be success

Scenario: Login should not be success
And User enter the username as "anshiksassa@gmail.com"
And User enter the password as "Iamking@000"
When User click on the login button
Then Login should fail