package com.ivl.qa.runner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

// The path for features file 
@CucumberOptions(features = "C:\\IVL_Selenium@2019\\IVLCucumberAutomationDemo\\src\\main\\java\\com\\ivl\\qa\\features\\completeSuite.feature",

		// The path of steps definitions files
		glue = { "com.ivl.qa.stepDefinition" },

		// Various plug-in to generate the reports
		plugin = { "pretty", "html:target/cucumber-reports/cucumber-pretty",
				"json:target/cucumber-reports/CucumberTestReport.json", "rerun:target/cucumber-reports/rerun.txt" },

		// Display the console output in proper readable format

		monochrome = true,

		// To check if any step is not defined in step definition file
		strict = true,

		// To check that mapping file proper between feature files and step definitions
		dryRun = false

// Tags are used to execute the test cases based on the tagged categories
// tags = {"@Smoke", "@Regression"} // Execute test cases which are @Smoke AND
// @Regression tagged
// tags = {"@Smoke, @Regression"} // Execute test cases which are tagged with
// @Smoke OR @Regression
// tags = {"~@Smoke, @Regression"} // Exclude @Smoke test cases
//// tags = {"~@Smoke", "~@Regression"} // Exclude @Smoke and @Regression test
// cases
//tags = { "@Regression" }
)
public class TestRunner {

	private TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass(alwaysRun = true)
	public void setUpClass() {
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test(groups = "cucumber", description = "Runs cucmber Features", dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) {
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass(alwaysRun = true)
	public void testDownClass() {
		testNGCucumberRunner.finish();
	}

}