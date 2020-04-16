$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/IVL_Selenium@2019/IVLCucumberAutomationDemo/src/main/java/com/ivl/qa/features/login.feature");
formatter.feature({
  "name": "PEP Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Smoke Test to validate that user on PEP Login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UAT"
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
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});