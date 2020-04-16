Feature: Use of Tagging in application 

@End2End
Scenario: PEP Login and logout test Scenario
Given User opens browser
When User is on PEP login page 
Then Title of login page is productivV
Then User enters login username and password
Then User clicks on login button 
Then Homepage logo is displayed
Then User clicks on the homepage logo
Then User profile name is displayed
Then User logs out

@Regression
Scenario: Regression test to validate PEP login mandatory fields ErrorMessage
Given User opens browser
When User is on PEP login page 
Then User clicks on login button
Then Error message is displayed 

@Regression
Scenario: Smoke Test to validate that user on PEP Login page
Given User opens browser
When  User is on PEP login page 
Then Title of login page is productivV