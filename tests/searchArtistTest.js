const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('searchArtistTest', function() {
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
  it('searchArtistTest', async function() {
    await driver.get("https://cloudfinalproject.herokuapp.com/artists")
    await driver.manage().window().setRect(1280, 687)
    await driver.findElement(By.id("search-input")).click()
    await driver.findElement(By.id("search-input")).sendKeys("Lego")
    await driver.findElement(By.id("search-button")).click()
    await driver.findElement(By.css(".artist-description")).click()
  })
})
