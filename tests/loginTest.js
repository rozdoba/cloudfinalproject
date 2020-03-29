const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('loginTest', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('loginTest', async function() {
    await driver.get("https://cloudfinalproject.herokuapp.com/")
    await driver.manage().window().setRect(1280, 687)
    await driver.findElement(By.id("username-input")).click()
    await driver.findElement(By.id("username-input")).sendKeys("A01047477")
    await driver.findElement(By.id("password-input")).click()
    await driver.findElement(By.id("password-input")).sendKeys("password")
    await driver.findElement(By.id("login-button")).click()
    await driver.findElement(By.id("search-input")).click()
    await driver.findElement(By.id("search-button")).click()
  })
})
