Feature: Use of Hooks in application 

Scenario: Regression test to validate PEP login mandatory fields ErrorMessage
When User is on PEP login page 
Then User clicks on login button
Then Error message is displayed 

Scenario: Smoke Test to validate that user on PEP Login page
When  User is on PEP login page 
Then Title of login page is productivV