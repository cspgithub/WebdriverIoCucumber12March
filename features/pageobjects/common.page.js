class commonPage {
  openHomePage() {
    browser.navigateTo("http://automationpractice.com/index.php");
    console.log("navigating to url");
    browser.maximizeWindow();

    const Title= browser.getTitle();
    //assert

  }
}
export default new commonPage();


