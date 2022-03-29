import { Given, When, Then } from "@wdio/cucumber-framework";
import commonPage from "../pageobjects/common.page";
import createAccountPage from "../pageobjects/createAccount.page";
import homePage from "../pageobjects/home.page";
import faker from "faker";


Given(/^I am on the home page$/, async () => {
  commonPage.openHomePage();
  // await expect(homePage.btnSignIn).toBePresent();
});

Then(/^Navigate to the SignUp page$/, async () => {
  await homePage.navigateToLogInPage();
});

Then(/^create an account with random username$/, async () => {
  console.log("account creation ");
  const randomStr = Math.random().toString(36).substring(2,5);
  const emailId = `myemail_${randomStr}@gmail.com`;
  const addressObj = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    address1: faker.address.streetAddress(),
    address2: faker.random.alphaNumeric(5),
  };

/*   utils.dynamicData.email = emailId;
  utils.dynamicData.address = addressObj; */
  await createAccountPage.createAccount(emailId, addressObj);
});


;
