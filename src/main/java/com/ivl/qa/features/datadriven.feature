Feature: PEP login using the data driven approach 

#Without Examples keyword
Scenario: Data driven testing without examples keyword
Given User opens browser
When User is on PEP login page 
Then User enters "kuldeep.kumar@ivlglobal.com" and "MH12@ne2827"
Then User clicks on login button 
Then Invalid login error message is displayed 

#With Examples keyword
Scenario Outline: Data driven testing without examples keyword
Given User opens browser
When User is on PEP login page 
Then User enters "<username>" and "<password>"
Then User clicks on login button 
Then Invalid login error message is displayed 

Examples:
| username | password |
| kuldeep.kumar@ivl.com | MH12@ne2827 |
| Test@ivl.com | 1234 |
| Test1@ivl.com | 45678 |