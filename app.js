const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

const {createPresent} = require('./utils')

const db = require('./models')

db.sequelize
  .sync()
  .then(() => {
    console.log('db연결 성공')

    // 1. driver scrappping
    chrome.setDefaultService(
      new chrome.ServiceBuilder(chromedriver.path).build(),
    )

    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build()

    // driver.get('https://www.giftbox.co.kr/')
    // driver
    //   .findElement(webdriver.By.css('#gnb > ul > li:nth-child(1) > a'))
    //   .click()
    // driver
    //   .findElement(
    //     webdriver.By.css(
    //       '#gnb > ul > li:nth-child(1) > ul > li:nth-child(1) > a',
    //     ),
    //   )
    //   .click()

    // 2. create data
    const dummys = [
      {
        imageUrl: 'http://placehold.it/400x300',
        name: '선물1',
        brand: '브랜드1',
        price: '1000',
      },
      {
        imageUrl: 'http://placehold.it/500x200',
        name: '선물2',
        brand: '브랜드2',
        price: '1200',
      },
    ];

    dummys.forEach(async (dummy, index) => {
      await createPresent(dummy)
      console.log(`${index + 1}번째 선물 생성 완료`)
    });
  })
  
  .catch(console.error) // db 연결
