const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

const db = require('./models')

db.sequelize
  .sync()
  .then(() => {
    console.log('db연결 성공')

    chrome.setDefaultService(
      new chrome.ServiceBuilder(chromedriver.path).build(),
    )

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build()
  })
  .catch(console.error) // db 연결
