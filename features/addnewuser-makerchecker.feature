@BO-AddNewUser
Feature: Verify the Add New User scenario as a Maker,Checker and AA in System Admin

    Background: Launch omni and dashboard is displayed
        Given Omni url is provided and login page is displayed 

    Scenario: Add New User as a Maker and approve as a Checker
        Then Login as "Maker"
        Then Click the Add User button from All Users tab and add a new user to "Approve"
        And  Click Logout
        Then Login as "Checker"
        And  "Approve" the user

    Scenario: Suspend a new user as a Maker and approve as a checker

        Then Login as "Maker"
        And  "Suspend" the user as a "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  "Suspend" the user

    Scenario: Reactivate a suspended user as a Maker and approve as a checker

        Then Login as "Maker"
        And  "Reactivate" the user as a "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  "Reactivate" the user

    Scenario: Terminate an active user as a Maker and approve as a checker

        Then Login as "Maker"
        And  "Terminate" the user as a "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  "Terminate" the user

    Scenario: Add New User as a Maker and reject as a Checker
        Then Login as "Maker"
        Then Click the Add User button from All Users tab and add a new user to "Reject"
        And  Click Logout
        Then Login as "Checker"
        And  "Reject" the user

    Scenario: Add New User as an AA
        Then Login as "AA" 
        Then Click the Add User button from All Users tab and add a new user to "AA"

    Scenario: Suspend new user as an AA
        Then Login as "AA" 
        And  "Suspend" the user as a "AA"

    Scenario: Reactivate new user as an AA
        Then Login as "AA" 
        And  "Reactivate" the user as a "AA"

    Scenario: Terminate new user as an AA
        Then Login as "AA" 
        And  "Terminate" the user as a "AA"

    Scenario: Verify the Export List functionality for Maker
          Given Login as "Maker" 
          And  Verify the export list for "Maker"
        
    Scenario: Verify the Export List functionality for Checker
          Given Login as "Checker" 
          And  Verify the export list for "Checker"

    Scenario: Verify the Export List functionality AA
          Given Login as "AA" 
          And  Verify the export list for "AA"