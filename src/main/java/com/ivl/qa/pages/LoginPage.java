package com.ivl.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.ivl.qa.helper.LoggerHelper;
import com.ivl.qa.util.TestBase;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.junit.Test;

public class LoginPage extends TestBase {

	// Page factory: Object repository
	@CacheLookup
	@FindBy(name = "username")
	WebElement username;

	@FindBy(name = "password")
	WebElement password;

	@FindBy(xpath = "//div//button")
	WebElement loginButton;
	
	@FindBy(xpath ="//span[contains(text (),'The user name or password is incorrect.')]")
	WebElement invalidLoginError;

	@FindBy(xpath = "//div//h2")
	WebElement welcomeMessage;

	@FindBy(xpath = "//head//title")
	WebElement pageTitle;

	@FindBy(xpath = "//div//img[@class='pull-right']")
	WebElement homePageLogo;

	@FindBy(xpath = "//div//li[@class='nav-item displayname']")
	WebElement profileName;

	@FindBy(xpath = "//div//ul//li[@class='dropdown']")
	WebElement dropDownIcon;

	@FindBy(xpath = "//div//li/a[@routerlink='/logout']")
	WebElement logoutButton;

	@FindBy(xpath = "//div//i[contains(text(),'Required')]")
	WebElement errorMessage;

	Logger logger = LoggerHelper.getLogger(LoginPage.class);

	// Initializing the Page Objects
	public LoginPage() {
		logger.info("Initializing the page objects");
		PageFactory.initElements(driver, this);
	}

	// Actions performed on the ProductivV home page

	public void validateWelcomeMessage(String message) {
		boolean isMessageCorrect = false;
		if (welcomeMessage.isDisplayed()) {
			String welcomeMsg = welcomeMessage.getText().trim();
			if (welcomeMsg.equals(message)) {
				isMessageCorrect = true;
				logger.info("Welocme message is correct");
			} else
				logger.error("Welocme message is not correct");
		}
		Assert.assertTrue("Welcome message is not correct or not exists: " + message, isMessageCorrect);
	}


	public String validateLoginPageTitle() {
		logger.info("Getting the title of PEP application");
		return driver.getTitle();
	}


	public void login(String uName, String pswd) {
		logger.info("Entering the user name");
		username.sendKeys(uName);
		logger.info("Entering the user password");
		password.sendKeys(pswd);
	}

	public void validateHomePageLogo() {
		boolean isHomePageLogoDispalyed = false;
		if (homePageLogo.isDisplayed()) {
			isHomePageLogoDispalyed = true;
			logger.info("Home page logo is displayed");
		} else
			logger.error("Home page logo is not displayed");
		Assert.assertTrue("Home page logo is not displayed", isHomePageLogoDispalyed);
	}

	public void clickOnHomePageLogo() {
		logger.info("User clicking on the Homepage logo");
		homePageLogo.click();
	}

	public void validateUserProfileName(String name) {
		boolean isProfileNameDisplayed = false;
		if (profileName.isDisplayed()) {
			String profName = profileName.getText().trim();
			if (profName.equals(name)) {
				isProfileNameDisplayed = true;
				logger.info("User profile name is displayyed");
			} else
				logger.error("User profile name is not dispalyed");
		}
		Assert.assertTrue("User profile name is not dispalyed or not exists: " + name, isProfileNameDisplayed);
	}

	public void userLogsOut() {
		logger.info("Clicking on the dropdown iocn");
		dropDownIcon.click();
		logger.info("Clicking on the logout button");
		logoutButton.click();
	}

	public void clickOnLoginButton() {
		logger.info("Clicking on the Login button");
		loginButton.click();
	}

	public void validateErrorMessage(String errMsg) {
		boolean isMsgCorrect = false;
		if (errorMessage.isDisplayed()) {
			String message = errorMessage.getText().trim();
			if (message.equals(errMsg)) {
				isMsgCorrect = true;
				logger.info("Error message is displayed");
			} else
				logger.error("Error message is not dispalyed");
		}
		Assert.assertTrue("Error message is not dispalyed or not exists: " + errMsg, isMsgCorrect);
	}

	public void validateLoginPageErrorMessage(String message) {
		boolean isErrorMessageCorrect = false;
		if (invalidLoginError.isDisplayed()) {
			String welcomeMsg = invalidLoginError.getText().trim();
			if (welcomeMsg.equals(message)) {
				isErrorMessageCorrect = true;
				logger.info("Error message is correct");
			} else
				logger.error("Error message is not correct");
		}
		Assert.assertTrue("Error message is not correct or not exists: " + message, isErrorMessageCorrect);
	}
	
	public void tearDown() {
		logger.info("Closing the browser");
		driver.quit();
	}
}
