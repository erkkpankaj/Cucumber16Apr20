package com.ivl.qa.stepDefinition;

import com.ivl.qa.pages.LoginPage;
import com.ivl.qa.util.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefinition extends TestBase {

	LoginPage loginPageObj;

	public LoginStepDefinition() {
		super();
	}

	// This will be executed before every test scenario
	// @Before
	@Given("^User opens browser$")
	public void user_opens_browser() {
		TestBase.initilization();
		loginPageObj = new LoginPage();
	}

	// This will be executed after every test scenario
	// @After
	@Then("^close the browser$")
	public void close_the_browser() {
		loginPageObj.tearDown();
	}

	@When("^User is on PEP login page$")
	public void user_is_on_PEP_login_page() {
		loginPageObj.validateWelcomeMessage("Welcome to productivV");
	}

	@Then("^Title of login page is productivV$")
	public void title_of_login_page_is_productivV() {
		String pageTitle = driver.getTitle();
		loginPageObj.validateLoginPageTitle();
		Assert.assertEquals("Login | productivV", pageTitle);
	}

	@Then("^User enters login username and password$")
	public void user_enters_login_username_and_password() {
		loginPageObj.login(prop.getProperty("username"), prop.getProperty("password"));
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() {
		loginPageObj.clickOnLoginButton();
	}

	@Then("^Homepage logo is displayed$")
	public void homepage_logo_is_displayed() {
		loginPageObj.validateHomePageLogo();
	}

	@Then("^User clicks on the homepage logo$")
	public void user_clicks_on_the_homepage_logo() {
		loginPageObj.clickOnHomePageLogo();
	}

	@Then("^User profile name is displayed$")
	public void user_profile_name_is_displayed() {
		loginPageObj.validateUserProfileName("Kuldeep Kumar Pankaj");
	}

	@Then("^User logs out$")
	public void user_logs_out() {
		loginPageObj.userLogsOut();
	}

	@Then("^Error message is displayed$")
	public void error_message_is_displayed() {
		loginPageObj.validateErrorMessage("Required");
	}

	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
		loginPageObj.login(username, password);
	}

	@Then("^Invalid login error message is displayed$")
	public void invalid_login_error_message_is_displayed() {
		loginPageObj.validateLoginPageErrorMessage("The user name or password is incorrect.");
	}
}
