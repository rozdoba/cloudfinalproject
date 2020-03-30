const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const addtest = async () => {
  await driver.get("https://cloudfinalproject.herokuapp.com/artists")
  await driver.manage().window().setRect(1280, 687)
  await driver.findElement(By.id("add-button")).click()
  await driver.findElement(By.name("name")).click()
  await driver.findElement(By.name("name")).sendKeys("Lego Man")
  await driver.findElement(By.name("description")).click()
  await driver.findElement(By.name("description")).sendKeys("I am Lego Man")
  await driver.findElement(By.name("url")).click()
  await driver.findElement(By.name("url")).sendKeys("https://randomuser.me/api/portraits/lego/6.jpg")
  await driver.findElement(By.id("submit-button")).click()
  await driver.findElement(By.id("add-button")).click()
  await driver.findElement(By.name("name")).click()
  await driver.findElement(By.name("name")).sendKeys("Human")
  await driver.findElement(By.name("description")).click()
  await driver.findElement(By.name("description")).sendKeys("I am Human")
  await driver.findElement(By.name("url")).click()
  await driver.findElement(By.name("url")).sendKeys("https://randomuser.me/api/portraits/women/24.jpg")
  await driver.findElement(By.id("submit-button")).click()
  driver.quit();
}

(async () => {
  try{
    await addtest()
    console.log("Add test success")
  }catch (error){
    await driver.quit();
    console.log("Add test failed")
  }
})()

