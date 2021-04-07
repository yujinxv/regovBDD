@BO-AddNewUser
Feature: Verify the Add New User scenario as a Maker,Checker and AA in System Admin

    Background: Launch omni and dashboard is displayed
        Given Omni url is provided and login page is displayed 

    Scenario: Add New User as a Maker,Checker
        Then Login as "Maker"
        Then Click the Add User button from All Users tab and add a new user as "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  Approve the new user
        And  Click Logout

    Scenario: Add New User as an AA
        Then Login as "AA" 
        Then Click the Add User button from All Users tab and add a new user as "AA"
        And  Click Logout