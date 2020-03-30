const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const searchtest = async () => {
  await driver.get("https://cloudfinalproject.herokuapp.com/artists")
  await driver.manage().window().setRect(1280, 687)
  await driver.findElement(By.id("search-input")).click()
  await driver.findElement(By.id("search-input")).sendKeys("Lego")
  await driver.findElement(By.id("search-button")).click()
  await driver.findElement(By.css(".artist-description")).click()
  driver.quit();
}

(async () => {
  try{
    await searchtest()
    console.log("Search test success")
  }catch (error){
    await driver.quit();
    console.log("Search test failed")
  }
})()

