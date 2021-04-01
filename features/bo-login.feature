@BO-Login
Feature: Verify the Omni page login

    Scenario: Omni page success login
        Given Omni url is provided
        When Login Username and Password is provided
        Then Click on the Login button
        And Click the Add User button from All Users tab and add a new user