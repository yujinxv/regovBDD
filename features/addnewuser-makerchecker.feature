@BO-AddNewUser
Feature: Verify the Add New User scenario as a Maker,Checker and AA in System Admin

    Background: Launch omni and dashboard is displayed
        Given Omni url is provided and login page is displayed 

    Scenario: Add New User as a Maker and approve as a Checker
        Then Login as "Maker"
        Then Click the Add User button from All Users tab and add a new user to "Approve"
        And  Click Logout
        Then Login as "Checker"
        And  "Approve" the new user

    Scenario: Suspend a new user as a Maker and approve as a checker

        Then Login as "Maker"
        And  "Suspend" the new user as a "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  "Suspend" the new user

    Scenario: Reactivate a suspended user as a Maker and approve as a checker

        Then Login as "Maker"
        And  "Reactivate" the new user as a "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  "Reactivate" the new user

    Scenario: Terminate an active user as a Maker and approve as a checker

        Then Login as "Maker"
        And  "Terminate" the new user as a "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  "Terminate" the new user

    Scenario: Add New User as a Maker and reject as a Checker
        Then Login as "Maker"
        Then Click the Add User button from All Users tab and add a new user to "Reject"
        And  Click Logout
        Then Login as "Checker"
        And  "Reject" the new user

    Scenario: Add New User as an AA
        Then Login as "AA" 
        Then Click the Add User button from All Users tab and add a new user to "AA"

