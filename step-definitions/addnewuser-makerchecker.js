const helpers = require('../runtime/helpers.js');
const utilfn = require('selenium-cucumber-js/node_modules/selenium-webdriver/lib/until');
const libwebdriver = require('selenium-cucumber-js/node_modules/selenium-webdriver/lib/webdriver');


module.exports = function () {

  this.Given('Omni url is provided and login page is displayed', { timeout: 100000 }, async function () {

    await helpers.loadPage(shared.testData.url)
    //Launch the browser and Omni
    driver.manage().window().maximize();
    driver.wait(until.elementLocated(page.addnewuserSa.elements.loginlogo))   
    });


  this.When(/^Login as "([^"]*)"$/, { timeout: 100000 }, async function (usertype) {

    if(usertype == "Maker"){
      usertype = shared.testData.username_maker;
    }else if(usertype == "Checker"){
      usertype = shared.testData.username_checker;
    }else if(usertype == "AA"){
      usertype = shared.testData.username_aa;
    }
    const elementusername = await driver.findElement(page.addnewuserSa.elements.username)
    elementusername.sendKeys(usertype);
    const elementpassword = await driver.findElement(page.addnewuserSa.elements.password)
    elementpassword.sendKeys(shared.testData.password);

    
    await driver.findElement(page.addnewuserSa.elements.btnloginnow).click();  
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.imgsidenavusername))
  });


    this.Then(/^Click the Add User button from All Users tab and add a new user as "([^"]*)"$/,{ timeout: 200000},async function (user) {

        await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
        await driver.findElement(page.addnewuserSa.elements.btnadduser).click()
        driver.sleep(25000);
        const elvisisble = driver.findElement(page.addnewuserSa.elements.txtloginid);
        driver.wait(until.elementIsVisible(elvisisble),1000);
        
       //Provide the User details in the Add User page
        
        if(user == "AA"){
          var newlogin = "AA"+shared.testData.loginid;
          var newname = "AA"+shared.testData.name;
          var newmail = "AA"+shared.testData.email;
        }else{
          var newlogin = shared.testData.loginid;
          var newname = shared.testData.name;
          var newmail = shared.testData.email;
        }
        await driver.findElement(page.addnewuserSa.elements.txtloginid).sendKeys(newlogin)
        await driver.findElement(page.addnewuserSa.elements.txtname).sendKeys(newname)
        //Save the name of the new user in a notepad for the checker flow
        readwritedata(shared.testData.name);

        await driver.findElement(page.addnewuserSa.elements.drphomebranch).click()
        driver.sleep(1000);
        await driver.findElement(page.addnewuserSa.elements.drphomebranchlist).click()
        await driver.findElement(page.addnewuserSa.elements.drpdept).click()
        driver.sleep(1000);
        await driver.findElement(page.addnewuserSa.elements.drpdeptlist).click()
        await driver.findElement(page.addnewuserSa.elements.txtemail).sendKeys(newmail)
        await driver.findElement(page.addnewuserSa.elements.txtmobile).sendKeys(shared.testData.mobileno)
        await driver.findElement(page.addnewuserSa.elements.txtdescription).sendKeys(shared.testData.description)
        driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
        driver.sleep(1000);
        await driver.findElement(page.addnewuserSa.elements.ddassignusergroup).click()
        driver.sleep(1000);
        await driver.findElement(page.addnewuserSa.elements.drpassigngrouplist).click()
        driver.sleep(1000);
        //Click the Save button
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnsave))
        const savebtn = await driver.findElement(page.addnewuserSa.elements.btnsave)

        if(utilfn.elementIsEnabled(savebtn)){
          await driver.findElement(page.addnewuserSa.elements.btnsave).click()
        }
        
        driver.sleep(2000);
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.modalwindowdata))
        var successmsg = await driver.findElement(page.addnewuserSa.elements.modalwindowdata).getText();
        if(user == "AA"){
          var successmsgsplitauto = []; 
          successmsgsplitauto = successmsg.split("\n");
          if (successmsgsplitauto[0].trim() === shared.testData.addusersuccessmsgaa1.trim()) {
            if (successmsgsplitauto[1].trim() === newname + shared.testData.addusersuccessmsgaa2) {
                await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
            }
          }
        }else{       
         //Verify the success message after clicking save
        var successmsgsplit = []; 
        successmsgsplit = successmsg.split("\n");
        if (successmsgsplit[0].trim() === shared.testData.addusersuccessmsg1.trim()) {
          if (successmsgsplit[1].trim() === shared.testData.addusersuccessmsg2.trim()) {
            await driver.findElement(page.addnewuserSa.elements.confirmmodal).click();      
          }
        }} 
       });

       this.Then('Click Logout', { timeout: 2000}, async function () {

        //Logout from the application as a maker
        
        await driver.findElement(page.addnewuserSa.elements.logout).click()
        driver.wait(until.elementIsVisible(driver.findElement(page.addnewuserSa.elements.logoutmodal)),10000)
        await driver.findElement(page.addnewuserSa.elements.logoutmodal).click()
        driver.sleep(1000);
        await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()

       });
 
    
    this.Then('Approve the new user', { timeout: 200000}, async function () {
     
      let el = driver.findElement(page.addnewuserSa.elements.imgsidenavusername);
      driver.wait(until.elementIsVisible(el),50000);

      //Search for the new user
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserssearchfield))

     driver.sleep(25000);
      await driver.findElement(page.addnewuserSa.elements.alluserssearchfield).sendKeys(shared.testData.name)
      //Approve the created user
      driver.sleep(5000);
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.viewicon)).click()
      driver.sleep(5000);
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnapprove))
      driver.sleep(5000);
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnapprove)).click()
      
      driver.sleep(2000);
      const elmodalapproveuser = driver.findElement(page.addnewuserSa.elements.modalwindowdata);
      driver.wait(until.elementIsVisible(elmodalapproveuser),10000);
      var successmsgapprove = await driver.findElement(page.addnewuserSa.elements.modalwindowdata).getText()

      //Verify the success message after clicking Approve button
      var successmsgsplitapprove = []; 
      successmsgsplitapprove = successmsgapprove.split("\n");
      if (successmsgsplitapprove[0].trim() === shared.testData.addusersuccessmsgapprove1.trim()) {
        if (successmsgsplitapprove[1].trim() === shared.testData.name.trim() + shared.testData.addusersuccessmsgapprove2) {

          await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
     }};
    
  });

  };



//================================================================================================================= 
//Function to create and write data to notepad during runtime
function readwritedata(data) {
  const fsLibrary  = require('fs')    
  // Write data
  fsLibrary.writeFile('../Runtime_TD/TD.txt', data, (error) => { 
        
      // In case of a error throw err exception. 
      if (error) throw err; 
  }) 
}

