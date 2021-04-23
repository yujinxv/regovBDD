const helpers = require('../runtime/helpers.js');
const utilfn = require('selenium-cucumber-js/node_modules/selenium-webdriver/lib/until');
const libwebdriver = require('selenium-cucumber-js/node_modules/selenium-webdriver/lib/webdriver');
var assert = require('assert');

module.exports = function () {

  this.Given('Omni url is provided and login page is displayed', { timeout: 90000 }, async function () {

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


    this.Then(/^Click the Add Role button from Roles & Permissions tab and add a new role "([^"]*)" to "([^"]*)"$/,{timeout: 100000},async function (privilege,user) {
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
        driver.sleep(25000);
        const elmodalrole = driver.findElement(page.addnewroleSa.elements.rolespermissiontab);
        driver.wait(until.elementIsVisible(elmodalrole),10000);
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.rolespermissiontab))
        await driver.findElement(page.addnewroleSa.elements.rolespermissiontab).click()
        driver.sleep(25000);
        await driver.findElement(page.addnewroleSa.elements.btnaddrole).click()
        driver.sleep(3000);
        const elvisisble = driver.findElement(page.addnewroleSa.elements.txtrolename);
        driver.wait(until.elementIsVisible(elvisisble),1000);
       //Provide the role details in the Add role page
        
        if(user == "AA"){
          var newrolename = shared.testData.rolename_aa;
        }else if(user == "Approve"){
          var newrolename = shared.testData.rolename_mkrappr;
        }else if(user == "Reject"){
          var newrolename = shared.testData.rolename_mkrrej;
        }
        await driver.findElement(page.addnewroleSa.elements.txtrolename).sendKeys(newrolename)
        driver.sleep(2000);
        await driver.findElement(page.addnewroleSa.elements.txtroledesc).sendKeys(shared.testData.roledescription)
        driver.sleep(2000);

        //To select the Grant Privilege option
        if(privilege == "HQ Backoffice"){
          await driver.findElement(page.addnewroleSa.elements.radbtnhqbo).click()
          driver.sleep(3000);
        }

        //Click the Save button
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.btnsave))
        const savebtn = await driver.findElement(page.addnewroleSa.elements.btnsave)

        if(utilfn.elementIsEnabled(savebtn)){
          await driver.findElement(page.addnewroleSa.elements.btnsave).click()
        }
        
        driver.sleep(2000);
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.modalwindowdata))
        var rolesuccessmsg = await driver.findElement(page.addnewroleSa.elements.modalwindowdata).getText();
        if(user == "AA"){
          var successmsgsplitautoaa = []; 
          successmsgsplitautoaa = rolesuccessmsg.split("\n");
          assert.strictEqual(successmsgsplitautoaa[0].trim(),shared.testData.addrolesuccessmsgaa1.trim())
          assert.strictEqual(successmsgsplitautoaa[1].trim(),newrolename + shared.testData.addrolesuccessmsgaa2)
        }else{       
         //Verify the success message after clicking save
        var rolesuccessmsgsplit = []; 
        rolesuccessmsgsplit = rolesuccessmsg.split("\n");
        assert.strictEqual(rolesuccessmsgsplit[0].trim(),shared.testData.addrolesuccessmsg1.trim())
        assert.strictEqual(rolesuccessmsgsplit[1].trim(),shared.testData.addrolesuccessmsg2.trim())
        await driver.findElement(page.addnewroleSa.elements.confirmmodal).click();               
       }
       });

       this.Then('Click Logout', { timeout: 20000}, async function () {

        //Logout from the application as a maker
        await driver.findElement(page.addnewuserSa.elements.logout).click()
        await driver.wait(until.elementIsVisible(driver.findElement(page.addnewuserSa.elements.logoutmodal)),10000)
        await driver.findElement(page.addnewuserSa.elements.logoutmodal).click()
        driver.sleep(1000);
        await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()

       });
 
    
    this.Then(/^"([^"]*)" the role$/, { timeout: 150000}, async function (actiontype) {
     
      let el = driver.findElement(page.addnewuserSa.elements.imgsidenavusername);
      driver.wait(until.elementIsVisible(el),50000);

      //Search for the new role
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
      driver.sleep(25000);
      const elmodalrole = driver.findElement(page.addnewroleSa.elements.rolespermissiontab);
      driver.wait(until.elementIsVisible(elmodalrole),10000);
      await driver.wait(until.elementLocated(page.addnewroleSa.elements.rolespermissiontab))
      await driver.findElement(page.addnewroleSa.elements.rolespermissiontab).click()
      driver.sleep(20000);
      await driver.wait(until.elementLocated(page.addnewroleSa.elements.rolesearchfield))
      if(actiontype == "Approve" || actiontype == "Suspend" || actiontype == "Reactivate" || actiontype == "Delete"){
        var rolenewname = shared.testData.rolename_mkrappr;
      }else if (actiontype == "Reject"){
        var rolenewname = shared.testData.rolename_mkrrej;  
      } 
     //driver.sleep(5000);
      await driver.findElement(page.addnewroleSa.elements.rolesearchfield).sendKeys(rolenewname)
      //Approve the created user
      driver.sleep(8000);
      await driver.wait(until.elementLocated(page.addnewroleSa.elements.viewicon)).click()
      driver.sleep(3000);
       //Approve and Reject
       if(actiontype == "Approve" || actiontype == "Suspend" || actiontype == "Reactivate" || actiontype == "Delete"){
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.btnapprove))
        driver.sleep(5000);
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.btnapprove)).click() 
        driver.sleep(2000);
        const elmodalapproverole = driver.findElement(page.addnewroleSa.elements.modalwindowdata);
        driver.wait(until.elementIsVisible(elmodalapproverole),10000);
        var successmsgapproverole = await driver.findElement(page.addnewroleSa.elements.modalwindowdata).getText()
        //Since the success message for suspend is different
        if(actiontype == "Suspend"){
          var verifymsgrole1 = shared.testData.suspendrolesuccessmsgapprove1.trim();
          var verifymsgrole2 = shared.testData.suspendrolesuccessmsgapprove2;
        }else if(actiontype == "Reactivate"){
          var verifymsgrole1 = shared.testData.reactivaterolesuccessmsgapprove1.trim();
          var verifymsgrole2 = shared.testData.reactivaterolesuccessmsgapprove2;
        }else if(actiontype == "Delete"){
          var verifymsgrole1 = shared.testData.deleterolesuccessmsgapprove1.trim();
          var verifymsgrole2 = shared.testData.deleterolesuccessmsgapprove2;
        }
        else{
          var verifymsgrole1 = shared.testData.addrolesuccessmsgapprove1.trim();
          var verifymsgrole2 = shared.testData.addrolesuccessmsgapprove2;
        }
        //Verify the success message after clicking Approve button
        var successmsgsplitapproverole = []; 
        successmsgsplitapproverole = successmsgapproverole.split("\n");
        assert.strictEqual(successmsgsplitapproverole[0].trim(),verifymsgrole1)
        assert.strictEqual(successmsgsplitapproverole[1].trim(),rolenewname + verifymsgrole2)

      }else if(actiontype == "Reject"){
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.btnreject))
        driver.sleep(5000);
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.btnreject)).click()
        //Reject Remarks
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.txtrejectremarks))
        await driver.findElement(page.addnewroleSa.elements.txtrejectremarks).sendKeys("Rejected Remarks")
        driver.wait(until.elementIsVisible(driver.findElement(page.addnewroleSa.elements.btnsave)),10000)
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.btnsave)).click()

        driver.sleep(2000);
        const elmodalrejectrole = driver.findElement(page.addnewroleSa.elements.modalwindowdata);
        driver.wait(until.elementIsVisible(elmodalrejectrole),10000);
        var successmsgrolereject = await driver.findElement(page.addnewroleSa.elements.modalwindowdata).getText()
  
        //Verify the success message after clicking Reject button
        var successmsgrolesplitreject = []; 
        successmsgrolesplitreject = successmsgrolereject.split("\n");
        assert.strictEqual(successmsgrolesplitreject[0].trim(),shared.testData.addrolesuccessmsgreject1.trim())
        assert.strictEqual(successmsgrolesplitreject[1].trim(),shared.testData.addrolesuccessmsgreject2.trim())
       // if (successmsgrolesplitreject[0].trim() === shared.testData.addrolesuccessmsgreject1.trim()) {
          //if (successmsgrolesplitreject[1].trim() === shared.testData.addrolesuccessmsgreject2.trim()) {
  
            //await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
       //}}; 

      }  
  });


    this.Then(/^"([^"]*)" the role as a "([^"]*)"$/, { timeout: 100000}, async function (action,loginusertype) {

      let el = driver.findElement(page.addnewuserSa.elements.imgsidenavusername);
      driver.wait(until.elementIsVisible(el),50000);

      //Search for the new user
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
      driver.sleep(25000);
      const elmodalrole = driver.findElement(page.addnewroleSa.elements.rolespermissiontab);
      driver.wait(until.elementIsVisible(elmodalrole),10000);
      await driver.wait(until.elementLocated(page.addnewroleSa.elements.rolespermissiontab))
      await driver.findElement(page.addnewroleSa.elements.rolespermissiontab).click()
      driver.sleep(2000);
      await driver.wait(until.elementLocated(page.addnewroleSa.elements.rolesearchfield))
      if((action == "Suspend" || action == "Reactivate" || action == "Delete") && loginusertype == "Maker"){
        var rolename1 = shared.testData.rolename_mkrappr;
      }else if((action == "Suspend" || action == "Reactivate" || action == "Delete") && loginusertype == "AA"){
        var rolename1 = shared.testData.rolename_aa;
      }
     driver.sleep(20000);
      await driver.findElement(page.addnewroleSa.elements.rolesearchfield).sendKeys(rolename1)
      //Select the respective actions
      driver.sleep(5000);
      await driver.wait(until.elementLocated(page.addnewroleSa.elements.actionsicon)).click()
      driver.sleep(1000);
       //Suspend the role
       if(action == "Suspend"){
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.actsuspendrole)).click()
        //Click the Yes button in the popup
        driver.sleep(1000);
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.btnyescontinue)).click()
        //Verify the modal message
        driver.sleep(1000);
        //For AA user
        if (loginusertype == "AA"){
          driver.sleep(2000);
          const elmodalsuspendaa = driver.findElement(page.addnewroleSa.elements.modalwindowdata_aa);
          driver.wait(until.elementIsVisible(elmodalsuspendaa),10000);
          var aamsgapproverole = await driver.findElement(page.addnewroleSa.elements.modalwindowdata_aa).getText()
          //Verify the success message after clicking suspend button
            var aamsgsplitapprove = []; 
            aamsgsplitapproverole = aamsgapproverole.split("\n");
            assert.strictEqual(aamsgsplitapproverole[0].trim(),shared.testData.suspendroleaasuccessmessage1.trim())
            assert.strictEqual(aamsgsplitapproverole[1].trim(),rolename1.trim() + shared.testData.suspendroleaasuccessmessage2)
          //For Maker user
        }else{
          if(await driver.wait(until.elementLocated(page.addnewroleSa.elements.suspendrolemodalmsg1))){
              if(await driver.wait(until.elementLocated(page.addnewroleSa.elements.suspendrolemodalmsg2))){
                await driver.findElement(page.addnewroleSa.elements.confirmmodal).click()
                //Move the focus to the next tab and wait to remove the duplicate hidden DOM objects before logout
                driver.sleep(1000);
                await driver.findElement(page.addnewuserSa.elements.usergroupstab).click()
                driver.sleep(25000);
              }};
            }
          //Reactivate the role
       }else if(action == "Reactivate"){
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.actreactivaterole)).click()
        //Click the Yes button in the popup
        driver.sleep(1000);
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.btnyescontinue)).click()
        //Verify the modal message
        driver.sleep(1000);
        //For AA user
        if (loginusertype == "AA"){
          const elmodalreactivateaarole = driver.findElement(page.addnewroleSa.elements.modalwindowdata_aa);
          driver.wait(until.elementIsVisible(elmodalreactivateaarole),10000);
          var aamsgapproverole = await driver.findElement(page.addnewroleSa.elements.modalwindowdata_aa).getText()
          //Verify the success message after clicking reactivate button
            var aamsgsplitapproverole = []; 
            aamsgsplitapproverole = aamsgapproverole.split("\n");
            assert.strictEqual(aamsgsplitapproverole[0].trim(),shared.testData.reactivateroleaasuccessmessage1.trim())
            assert.strictEqual(aamsgsplitapproverole[1].trim(),rolename1.trim() + shared.testData.reactivateroleaasuccessmessage2)
          //For Maker user
        }else{
        if(await driver.wait(until.elementLocated(page.addnewroleSa.elements.reactivaterolemodalmsg1))){
          if(await driver.wait(until.elementLocated(page.addnewroleSa.elements.reactivaterolemodalmsg2))){
            await driver.findElement(page.addnewroleSa.elements.confirmmodal).click()
            //Move the focus to the next tab and wait to remove the duplicate hidden DOM objects before logout
            driver.sleep(1000);
            await driver.findElement(page.addnewuserSa.elements.usergroupstab).click()
            driver.sleep(25000);
          }};
        };
       }
       //Delete the role
       else if(action == "Delete"){
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.actdeleterole)).click()
        //Click the Yes button in the popup
        driver.sleep(1000);
        await driver.wait(until.elementLocated(page.addnewroleSa.elements.btnyescontinue)).click()
        //Verify the modal message
        driver.sleep(1000);
        //For AA user
        if (loginusertype == "AA"){
          const elmodalterminateaarole = driver.findElement(page.addnewroleSa.elements.modalwindowdata_aa);
          driver.wait(until.elementIsVisible(elmodalterminateaarole),10000);
          var aamsgapproverole = await driver.findElement(page.addnewroleSa.elements.modalwindowdata_aa).getText()
          //Verify the success message after clicking terminate button
            var aamsgsplitapproverole = []; 
            aamsgsplitapproverole = aamsgapproverole.split("\n");
            assert.strictEqual(aamsgsplitapproverole[0].trim(),shared.testData.deleteroleaasuccessmessage1.trim())
            assert.strictEqual(aamsgsplitapproverole[1].trim(),rolename1.trim() + shared.testData.deleteroleaasuccessmessage2)
          //For Maker user
        }else {
        if(await driver.wait(until.elementLocated(page.addnewroleSa.elements.deleterolemodalmsg1))){
          if(await driver.wait(until.elementLocated(page.addnewroleSa.elements.deleterolemodalmsg2))){
            await driver.findElement(page.addnewroleSa.elements.confirmmodal).click()
            //Move the focus to the next tab and wait to remove the duplicate hidden DOM objects before logout
            driver.sleep(1000);
            await driver.findElement(page.addnewuserSa.elements.usergroupstab).click()
            driver.sleep(25000);
          }};
       }
      };
    });

    this.Then(/^Verify the export list for "([^"]*)"$/, { timeout: 200000 }, async function (logintype) {
      let el = driver.findElement(page.addnewuserSa.elements.imgsidenavusername);
      driver.wait(until.elementIsVisible(el),50000);

      //Search for the new user
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
      driver.sleep(25000);
      const elmodalrole = driver.findElement(page.addnewroleSa.elements.rolespermissiontab);
      driver.wait(until.elementIsVisible(elmodalrole),10000);
      await driver.wait(until.elementLocated(page.addnewroleSa.elements.rolespermissiontab))
      await driver.findElement(page.addnewroleSa.elements.rolespermissiontab).click()
      driver.sleep(2000);
      //To delete all te old files in the download folder
      purgedownloadoldfiles();
      //To click the Export List button
      await driver.findElement(page.addnewroleSa.elements.btnexportlist).click()
      driver.sleep(25000);
      if(logintype !== "Checker"){
        await driver.findElement(page.addnewroleSa.elements.btnaddrole).click()
      }else if(logintype == "Checker"){
        await driver.findElement(page.addnewuserSa.elements.sidenavAdviseraccess).click()
      }
      driver.sleep(25000);
      //To verify the presence of the file in the download folder
      verifydownloadfile("Export_List_Hq_ Roles &  Permissions_");

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

//Function to delete all the old files in the download folder
function purgedownloadoldfiles() {

  const downloadsFolder = require('downloads-folder');
  var path = downloadsFolder();
  const fsExtra = require('fs-extra')
  fsExtra.emptyDirSync(path)
};


//Function to verify the downloaded file presence in the download folder
function verifydownloadfile(filename) {
  const fs = require('fs');
  const downloadsFolder = require('downloads-folder');
  var path = downloadsFolder();
  //require('child_process').exec('start "" ' +path);
  fs.readdir(path, (err, files) => {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    try {
      if(files.length == '0')
      //console.log("File not available"); 
      return driver.quit();
    }
    catch(e) {
      if ("exit") throw err;
    }
    //listing all files using forEach
    files.forEach(file => { 

      if(file.lastIndexOf(filename) !== -1){
        console.log("Export File available in the download folder");       
      }
  });
});

}