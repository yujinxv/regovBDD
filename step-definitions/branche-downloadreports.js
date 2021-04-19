const helpers = require('../runtime/helpers.js');
const utilfn = require('selenium-cucumber-js/node_modules/selenium-webdriver/lib/until');
const libwebdriver = require('selenium-cucumber-js/node_modules/selenium-webdriver/lib/webdriver');

module.exports = function () {

    this.Given(/^Login page is displayed$/, { timeout: 100000 }, async function () {

        await helpers.loadPage(shared.testData.url)
        //launch browser for OMNI

        driver.manage().window().maximize()
        driver.wait(until.elementLocated(page.brancheDownloadreports.elements.loginlogo))
    });

    this.Then(/^Login as Branch "([^"]*)"$/, { timeout: 100000 }, async function (usertype) {
        //login as Branch Maker user

        if(usertype == "Maker"){
            usertype = shared.testData.brmkrusername;
          }else if(usertype == "Checker"){
            usertype = shared.testData.brckrusername;
          }else if(usertype == "AA"){
            usertype = shared.testData.braausername;
          }
         
          const elementusername = await driver.findElement(page.brancheDownloadreports.elements.username)
          elementusername.sendKeys(usertype);
          const elementpassword = await driver.findElement(page.brancheDownloadreports.elements.password)
          elementpassword.sendKeys(shared.testData.password);
      
          
          await driver.findElement(page.brancheDownloadreports.elements.btnloginnow).click();  
            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.imgsidenavusername))
        });
    
    this.Then(/^Click the Export List button$/, { timeout: 100000}, async function () {
            // Branch Maker user download export list
            
            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))   
            await driver.findElement(page.brancheDownloadreports.elements.exportlistbtn).click()
            driver.sleep(5000)

            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))

        });    
         
    this.Then(/^Branch Maker Download Export List from Upcoming tab$/, { timeout: 100000}, async function () {
            // Branch Maker user download export list from Upcoming tab
            
            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))   
            
            await driver.findElement(page.brancheDownloadreports.elements.upcoming).present
            driver.sleep(5000)

            await driver.findElement(page.brancheDownloadreports.elements.exportlistbtn).click()
            driver.sleep(5000)
            
            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))

          });

    this.Then(/^Branch Maker Download Export List from With Physical Doc tab$/, { timeout: 100000}, async function () {
            // Branch Maker user download export list With Pysical Doc tab

            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))   
            
            await driver.findElement(page.brancheDownloadreports.elements.withPhysicaldoc).present
            driver.sleep(5000)

            await driver.findElement(page.brancheDownloadreports.elements.exportlistbtn).click()
            driver.sleep(5000)
            
            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))
            
    });

    this.Then(/^Branch Maker Download Export List from Rerouted tab$/, { timeout: 100000}, async function ()  {
            // Branch Maker user download export list With rerouted tab

            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))   
            
            await driver.findElement(page.brancheDownloadreports.elements.rerouted).click()
            driver.sleep(5000)

            await driver.findElement(page.brancheDownloadreports.elements.exportlistbtn).click()
            driver.sleep(5000)
            
            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))
      });

    this.Then(/^Branch Maker Download Export List from History tab$/, { timeout: 100000}, async function ()  {
            // Branch Maker user download export list With History tab

            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))   
            
            await driver.findElement(page.brancheDownloadreports.elements.history).click()
            driver.sleep(5000)

            await driver.findElement(page.brancheDownloadreports.elements.exportlistbtn).click()
            driver.sleep(5000)
            
            await driver.wait(until.elementLocated(page.brancheDownloadreports.elements.transactions))
      });
    
    this.Then(/^Branch Maker user Click Logout$/, { timeout: 2000}, async function () {
        //Logout from the application as a maker
        
        await driver.findElement(page.brancheDownloadreports.elements.logout).click()
        driver.wait(until.elementIsVisible(driver.findElement(page.addnewuserSa.elements.logoutmodal)),10000)
        await driver.findElement(page.brancheDownloadreports.elements.logoutmodal).click()
        driver.sleep(1000);
        await driver.findElement(page.brancheDownloadreports.elements.confirmmodal).click()

       });
}