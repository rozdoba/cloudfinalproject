const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const chrome = require('selenium-webdriver/chrome')
// const driverpath = require('chromedriver').path;

// var service = new chrome.ServiceBuilder(driverpath).build();
// chrome.setDefaultService(service);

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();

const loginTest = async () => {
    try {
        await driver.get("https://cloudfinalproject.herokuapp.com/")
        await driver.manage().window().setRect(1280, 687)
        await driver.findElement(By.id("username-input")).click()
        await driver.findElement(By.id("username-input")).sendKeys("A01047477")
        await driver.findElement(By.id("password-input")).click()
        await driver.findElement(By.id("password-input")).sendKeys("password")
        await driver.findElement(By.id("login-button")).click()
        await driver.findElement(By.id("search-input")).click()
        await driver.findElement(By.id("search-button")).click()
        console.log("LoginTest SUCCESS");
    } catch {
        await driver.quit();
        console.log("LoginTest FAILED");
    }
}

const addArtistTest = async () => {
    try {
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
        console.log("addArtistTest SUCCESS");
    } catch {
        await driver.quit();
        console.log("addArtistTest FAILED");
    }
}

const searchArtistTest = async () => {
    try {
        await driver.get("https://cloudfinalproject.herokuapp.com/artists")
        await driver.manage().window().setRect(1280, 687)
        await driver.findElement(By.id("search-input")).click()
        await driver.findElement(By.id("search-input")).sendKeys("Lego")
        await driver.findElement(By.id("search-button")).click()
        await driver.findElement(By.css(".artist-description")).click()
        console.log("searchArtistTest SUCCESS");
    } catch {
        await driver.quit();
        console.log("searchArtistTest FAILED");
    }
}

const deleteArtistTest = async () => {
    try {
        await driver.get("https://cloudfinalproject.herokuapp.com/artists")
        await driver.manage().window().setRect(1280, 687)
        await driver.findElement(By.css("#delete-artist-form > button")).click()
        console.log("deleteArtistTest SUCCESS");
    } catch {
        await driver.quit();
        console.log("deleteArtistTest FAILED");
    }
}

const logoutTest = async () => {
    try {
        await driver.get("https://cloudfinalproject.herokuapp.com/artists")
        await driver.manage().window().setRect(1280, 692)
        await driver.findElement(By.id("logout-button")).click()
        await driver.findElement(By.id("username-input")).click()
        await driver.findElement(By.id("password-input")).click()
        await driver.findElement(By.id("login-button")).click()
        console.log("logoutTest SUCCESS");
    } catch {
        await driver.quit();
        console.log("logoutTest FAILED");
    }
}

(async () => {
        await loginTest();
        await addArtistTest();
        await searchArtistTest();
        await deleteArtistTest();
        await logoutTest();

        await driver.quit();
})()