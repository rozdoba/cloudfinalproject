const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('addArtistTest', function() {
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
  it('addArtistTest', async function() {
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
  })
})
