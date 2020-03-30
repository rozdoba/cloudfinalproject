const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const chrome = require('selenium-webdriver/chrome')

var service = new chrome.ServiceBuilder('/usr/local/bin/chromedriver').build();
chrome.setDefaultService(service);

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();


const loginTest = async () => {
  await driver.get("https://cloudfinalproject.herokuapp.com/")
  await driver.manage().window().setRect(1280, 687)
  await driver.findElement(By.id("username-input")).click()
  await driver.findElement(By.id("username-input")).sendKeys("A01047477")
  await driver.findElement(By.id("password-input")).click()
  await driver.findElement(By.id("password-input")).sendKeys("password")
  await driver.findElement(By.id("login-button")).click()
  await driver.findElement(By.id("search-input")).click()
  await driver.findElement(By.id("search-button")).click()
  return true;
}

const addArtistTest = async () => {
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
    return true;
}

const searchArtistTest = async () => {
    await driver.get("https://cloudfinalproject.herokuapp.com/artists")
    await driver.manage().window().setRect(1280, 687)
    await driver.findElement(By.id("search-input")).click()
    await driver.findElement(By.id("search-input")).sendKeys("Lego")
    await driver.findElement(By.id("search-button")).click()
    await driver.findElement(By.css(".artist-description")).click()
    return true;
}

const deleteArtistTest = async () => {
    await driver.get("https://cloudfinalproject.herokuapp.com/artists")
    await driver.manage().window().setRect(1280, 687)
    await driver.findElement(By.css("#delete-artist-form > button")).click()
    return true;
}

const logoutTest = async () => {
    await driver.get("https://cloudfinalproject.herokuapp.com/artists")
    await driver.manage().window().setRect(1280, 692)
    await driver.findElement(By.id("logout-button")).click()
    await driver.findElement(By.id("username-input")).click()
    await driver.findElement(By.id("password-input")).click()
    await driver.findElement(By.id("login-button")).click()
    return true;
}

(async () => {
  try {
        if(await loginTest()) {
            console.log("LoginTest SUCCESS");
        }

        if(await addArtistTest()) {
            console.log("addArtistTest SUCCESS");
        }

        if(await searchArtistTest()) {
            console.log("searchArtistTest SUCCESS");
        }

        if(await deleteArtistTest()) {
            console.log("deleteArtistTest SUCCESS");
        }

        if(await logoutTest()) {
            console.log("logoutTest SUCCESS");
        }
        
        await driver.quit()

  } catch (error) {
    await driver.quit();
    console.log("Selenium Workflow FAILED")
  }

})()