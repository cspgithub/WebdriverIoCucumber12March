class homePage {
  //web elements

  get btnSignIn() {
    return $(".login");
  }

  get btnCreatAccount() {
    return $("#SubmitCreate");
  }

 

  //actions on web elements

  async navigateToLogInPage() {
    await this.btnSignIn.click();
  }

  
}
export default new homePage();
