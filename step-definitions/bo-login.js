const helpers = require('../runtime/helpers.js');

module.exports = function () {

    this.Given('Omni url is provided', function () {

        return helpers.loadPage(shared.testData.url).then(function() {

        driver.manage().window().maximize();
        driver.wait(until.elementLocated(page.boLogin.elements.loginlogo));
        });
    });

    this.When('Login Username and Password is provided', { timeout: 100000 }, async function () {

        const elementusername = await driver.findElement(page.boLogin.elements.username);
        elementusername.sendKeys(shared.testData.username);
        const elementpassword = await driver.findElement(page.boLogin.elements.password);
        elementpassword.sendKeys(shared.testData.password);
    });

    this.Then('Click on the Login button', { timeout: 20000}, async function () {

        await driver.findElement(page.boLogin.elements.btnloginnow).click();
       await driver.wait(until.elementLocated(page.boLogin.elements.imgsidenavusername));
      
         let el = driver.findElement(page.boLogin.elements.imgsidenavusername);
         driver.wait(until.elementIsVisible(el),50000);
        
         return driver.findElement(page.boLogin.elements.imgsidenavusername);
       });

       this.Then('Click the Add User button from All Users tab and add a new user', { timeout: 200000},async function () {

        /*await driver.wait(until.elementLocated(page.boLogin.elements.alluserstab));
        await driver.findElement(page.boLogin.elements.btnadduser).click();
        driver.sleep(50000);
        const elvisisble = driver.findElement(page.boLogin.elements.txtloginid);
        driver.wait(until.elementIsVisible(elvisisble),50000);
        
        //Enter the user details
        //JavascriptExecutor js = (JavascriptExecutor) driver;
        //WebElement elementToClick = driver.findElement(By.cssSelector("Element CSS"));
        //jsExec.executeScript("arguments[0].scrollIntoView()", elementToClick);
        //jsExec.executeScript("arguments[0].click();", page.boLogin.elements.btncancel);
        //new Actions(driver).moveToElement(elvisisble).perform();
        //await driver.findElement(page.boLogin.elements.btncancel).click();
        await driver.findElement(page.boLogin.elements.txtloginid).sendKeys(shared.testData.loginid);
        await driver.findElement(page.boLogin.elements.txtname).sendKeys(shared.testData.name);
        await driver.findElement(page.boLogin.elements.drphomebranch).click();
        //const elementhomebranch = await driver.findElement(page.boLogin.elements.drphomebranch);
        //var data = shared.testData.homebranch;
        //helpers.selectDropdownValueByVisibleText(page.boLogin.elements.drphomebranch,data);
        var optionName = shared.testData.homebranch;
        var selectElements = await driver.findElements(by.className('rc-virtual-list'));
        var options = [];

        for (var option of selectElements) {
            options.push((await option.getText()).toUpperCase());
        }
        optionName = optionName.toUpperCase();

        return selectElements[options.indexOf(optionName)].click();
    

         /*const elementloginid = await driver.findElement(page.boLogin.elements.txtloginid);
        elementloginid.sendKeys(shared.testData.loginid);
        const elementname = driver.findElement(page.boLogin.elements.txtname);
        elementname.sendKeys(shared.testData.name);
        
        const elementhomebranch = driver.findElement(page.boLogin.elements.drphomebranch);
        var data = shared.testData.homebranch;
        helpers.selectDropdownValueByVisibleText(elementhomebranch,data);
        //drpHomebranch = new Select(driver.findElement(page.boLogin.elements.drphomebranch));
		    //drpHomebranch.selectByVisibleText(shared.testData.homebranch);     
        drpDept = new Select(driver.findElement(page.boLogin.elements.drpdept));
		    drpDept.selectByVisibleText(shared.testData.dept);

        await driver.findElement(page.boLogin.elements.txtemail).sendKeys((shared.testData.email));
        await driver.findElement(page.boLogin.elements.txtmobile).sendKeys((shared.testData.mobileno));
        await driver.findElement(page.boLogin.elements.txtdescription).sendKeys((shared.testData.description));
        drpAssgnGrp = new Select(driver.findElement(page.boLogin.elements.ddassignusergroup));
		    drpAssgnGrp.selectByVisibleText(shared.testData.assigngroup);
        
        await driver.findElement(page.boLogin.elements.btnsave).click();*/

        await driver.findElement(page.boLogin.elements.logout).click();
        await driver.findElement(page.boLogin.elements.logoutmodal).click();
        await driver.findElement(page.boLogin.elements.logoutconfirmmodal).click();
        

       });
       //this.Then('Click on the Logout from the left navigation bar', { timeout: 20000}, async function () {

        //await driver.findElement(page.boLogin.elements.logout).click();

      // });

    };