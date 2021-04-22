@BO-DownloadReports
Feature: Verify the Branch user can download Reports

    Background: Launch omni and dashboard is displayed
        Given Login page is displayed 

    Scenario: Branch CE users can download Export List
        Then Login as Branch "Maker"
        Then Click the Export List button in Daily tab
        Then Branch "Maker" Download Export List from Upcoming tab
        Then Branch "Maker" Download Export List from With Physical Doc tab
        Then Branch "Maker" Download Export List from Rerouted tab
        Then Branch "Maker" Download Export List from History tab
        And  Click Logout
        Then Login as Branch "Checker"
        And  Click the Export List button in Daily tab
        Then Branch "Checker" Download Export List from Upcoming tab
        Then Branch "Checker" Download Export List from With Physical Doc tab
        Then Branch "Checker" Download Export List from Rerouted tab
        Then Branch "Checker" Download Export List from History tab
        And  Click Logout
        Then Login as Branch "AA"
        Then Click the Export List button in Daily tab
        Then Branch "AA" Download Export List from Upcoming tab
        Then Branch "AA" Download Export List from With Physical Doc tab
        Then Branch "AA" Download Export List from Rerouted tab
        Then Branch "AA" Download Export List from History tab
        And  Click Logout
