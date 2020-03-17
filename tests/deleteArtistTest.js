const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('deleteArtistTest', function() {
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
  it('deleteArtistTest', async function() {
    await driver.get("https://cloudfinalproject.herokuapp.com/artists")
    await driver.manage().window().setRect(1280, 687)
    await driver.findElement(By.css("#delete-artist-form > button")).click()
  })
})
