const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const deletetest = async () => {
  await driver.get("https://cloudfinalproject.herokuapp.com/artists")
  await driver.manage().window().setRect(1280, 687)
  await driver.findElement(By.css("#delete-artist-form > button")).click()
  driver.quit();
}

(async () => {
  try{
    await deletetest()
    console.log("Delete test success")
  }catch (error){
    await driver.quit();
    console.log("Delete test failed")
  }
})()

