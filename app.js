const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

var driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build()
