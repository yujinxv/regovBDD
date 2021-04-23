@BO-AddNewRole
Feature: Verify the Add New Role scenario as a Maker,Checker and AA in System Admin

    Background: Launch omni and dashboard is displayed
        Given Omni url is provided and login page is displayed 

    Scenario: Add New Role as a Maker and approve as a Checker
        Then Login as "Maker"
        Then Click the Add Role button from Roles & Permissions tab and add a new role "Branch Backoffice" to "Approve"
        And  Click Logout
        Then Login as "Checker"
        And  "Approve" the role

    Scenario: Suspend a new role as a Maker and approve as a checker

        Then Login as "Maker"
        And  "Suspend" the role as a "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  "Suspend" the role

    Scenario: Reactivate a suspended role as a Maker and approve as a checker

        Then Login as "Maker"
        And  "Reactivate" the role as a "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  "Reactivate" the role

    Scenario: Delete an active role as a Maker and approve as a checker

        Then Login as "Maker"
        And  "Delete" the role as a "Maker"
        And  Click Logout
        Then Login as "Checker"
        And  "Delete" the role

    Scenario: Add New role as a Maker and reject as a Checker
        Then Login as "Maker"
        Then Click the Add Role button from Roles & Permissions tab and add a new role to "Reject"
        And  Click Logout
        Then Login as "Checker"
        And  "Reject" the role

    Scenario: Add New Role as an AA
        Then Login as "AA" 
        Then Click the Add Role button from Roles & Permissions tab and add a new role "HQ Backoffice" to "AA"

    Scenario: Suspend new role as an AA
        Then Login as "AA" 
        And  "Suspend" the role as a "AA"

    Scenario: Reactivate new role as an AA
        Then Login as "AA" 
        And  "Reactivate" the role as a "AA"

    Scenario: Delete new role as an AA
        Then Login as "AA" 
        And  "Delete" the role as a "AA"

    Scenario: Verify the Export List functionality for Maker
          Given Login as "Maker" 
          And  Verify the export list for "Maker"
        
    Scenario: Verify the Export List functionality for Checker
          Given Login as "Checker" 
          And  Verify the export list for "Checker"

    Scenario: Verify the Export List functionality AA
          Given Login as "AA" 
          And  Verify the export list for "AA"

    