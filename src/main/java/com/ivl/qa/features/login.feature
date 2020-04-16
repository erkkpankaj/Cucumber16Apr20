Feature: PEP Login Feature

@FunctionalTest
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

#Without Examples keyword
@SmokeTest
Scenario: Data driven testing without examples keyword
Given User opens browser
When User is on PEP login page 
Then User enters "kuldeep.kumar@ivlglobal.com" and "MH12@ne2827"
Then User clicks on login button 
Then close the browser 

#With Examples keyword
@SmokeWithExample
Scenario Outline: Data driven testing without examples keyword
Given User opens browser
When User is on PEP login page 
Then User enters "<username>" and "<password>"
Then User clicks on login button 

Examples:
| username | password |
| kuldeep.kumar@ivlglobal.com | MH12@ne2827 |
| Test@ivl.com | 1234 |
| Test1@ivl.com | 45678 |

@RegressionTest
Scenario: Regression test to validate PEP login mandatory fields ErrorMessage
Given User opens browser
When User is on PEP login page 
Then User clicks on login button
Then Error message is displayed 

@UAT
Scenario: Smoke Test to validate that user on PEP Login page
Given User opens browser
When  User is on PEP login page 
Then Title of login page is productivV