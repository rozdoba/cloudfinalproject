const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const logintest = async () => {
  await driver.get("https://cloudfinalproject.herokuapp.com/")
  await driver.manage().window().setRect(1280, 687)
  await driver.findElement(By.id("username-input")).click()
  await driver.findElement(By.id("username-input")).sendKeys("A01047477")
  await driver.findElement(By.id("password-input")).click()
  await driver.findElement(By.id("password-input")).sendKeys("password")
  await driver.findElement(By.id("login-button")).click()
  await driver.findElement(By.id("search-input")).click()
  await driver.findElement(By.id("search-button")).click()
  driver.quit();
}

(async () => {
  try{
    await logintest()
    console.log("Login test success")
  }catch (error){
    await driver.quit();
    console.log("Login test failed")
  }
})()