const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('logoutTest', function() {
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
  it('logoutTest', async function() {
    await driver.get("https://cloudfinalproject.herokuapp.com/artists")
    await driver.manage().window().setRect(1280, 692)
    await driver.findElement(By.id("logout-button")).click()
    await driver.findElement(By.id("username-input")).click()
    await driver.findElement(By.id("password-input")).click()
    await driver.findElement(By.id("login-button")).click()
  })
})
