$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/IVL_Selenium@2019/IVLCucumberAutomationDemo/src/main/java/com/ivl/qa/features/completeSuite.feature");
formatter.feature({
  "name": "PEP Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "PEP Login and logout test Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on PEP login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_PEP_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of login page is productivV",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_productivV()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters login username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_login_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Homepage logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.homepage_logo_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the homepage logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_the_homepage_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User profile name is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_profile_name_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_out()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Data driven testing without examples keyword",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on PEP login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_PEP_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"kuldeep.kumar@ivlglobal.com\" and \"MH12@ne2827\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Data driven testing without examples keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User is on PEP login page",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "Invalid login error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Test@ivl.com",
        "1234"
      ]
    },
    {
      "cells": [
        "Test1@ivl.com",
        "45678"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Data driven testing without examples keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on PEP login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_PEP_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Test@ivl.com\" and \"1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Invalid login error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.invalid_login_error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Data driven testing without examples keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on PEP login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_PEP_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Test1@ivl.com\" and \"45678\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Invalid login error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.invalid_login_error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Regression test to validate PEP login mandatory fields ErrorMessage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on PEP login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_PEP_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Regression test to validate that user on PEP Login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on PEP login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_PEP_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of login page is productivV",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_productivV()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Regression Test to check error meesge on invalid login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on PEP login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_PEP_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"kuldeep.kumar@gmail.com\" and \"MH12@ne2827\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Invalid login error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.invalid_login_error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
});