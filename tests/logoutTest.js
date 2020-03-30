const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const logouttest = async () => {
  await driver.get("https://cloudfinalproject.herokuapp.com/artists")
  await driver.manage().window().setRect(1280, 692)
  await driver.findElement(By.id("logout-button")).click()
  await driver.findElement(By.id("username-input")).click()
  await driver.findElement(By.id("password-input")).click()
  await driver.findElement(By.id("login-button")).click()
  driver.quit();
}

(async () => {
  try{
    await logouttest()
    console.log("Logout test success")
  }catch (error){
    await driver.quit();
    console.log("Logout test failed")
  }
})()

