const helpers = require('../runtime/helpers.js');
const utilfn = require('selenium-cucumber-js/node_modules/selenium-webdriver/lib/until');
const libwebdriver = require('selenium-cucumber-js/node_modules/selenium-webdriver/lib/webdriver');

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


    this.Then(/^Click the Add User button from All Users tab and add a new user to "([^"]*)"$/,{ timeout: 90000},async function (user) {

        await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
        driver.sleep(25000);
        await driver.findElement(page.addnewuserSa.elements.btnadduser).click()
        driver.sleep(25000);
        const elvisisble = driver.findElement(page.addnewuserSa.elements.txtloginid);
        driver.wait(until.elementIsVisible(elvisisble),1000);
        
       //Provide the User details in the Add User page
        
        if(user == "AA"){
          var newlogin = shared.testData.loginid_aa;
          var newname = shared.testData.name_aa;
          var newmail = shared.testData.email_aa;
        }else if(user == "Approve"){
          var newlogin = shared.testData.loginid_apr;
          var newname = shared.testData.name_apr;
          var newmail = shared.testData.email_apr;
        }else if(user == "Reject"){
          var newlogin = shared.testData.loginid_rej;
          var newname = shared.testData.name_rej;
          var newmail = shared.testData.email_rej;
        }
        await driver.findElement(page.addnewuserSa.elements.txtloginid).sendKeys(newlogin)
        await driver.findElement(page.addnewuserSa.elements.txtname).sendKeys(newname)
        //Save the name of the new user in a notepad for the checker flow
        //readwritedata(shared.testData.name);

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
        driver.sleep(2000);
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
                //await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
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

       this.Then('Click Logout', { timeout: 20000}, async function () {

        //Logout from the application as a maker
        await driver.findElement(page.addnewuserSa.elements.logout).click()
        await driver.wait(until.elementIsVisible(driver.findElement(page.addnewuserSa.elements.logoutmodal)),10000)
        await driver.findElement(page.addnewuserSa.elements.logoutmodal).click()
        driver.sleep(1000);
        await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()

       });
 
    
    this.Then(/^"([^"]*)" the user$/, { timeout: 90000}, async function (actiontype) {
     
      let el = driver.findElement(page.addnewuserSa.elements.imgsidenavusername);
      driver.wait(until.elementIsVisible(el),50000);

      //Search for the new user
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserssearchfield))
      if(actiontype == "Approve" || actiontype == "Suspend" || actiontype == "Reactivate" || actiontype == "Terminate"){
        var newname = shared.testData.name_apr;
      }else if (actiontype == "Reject"){
        var newname = shared.testData.name_rej;  
      } 
     driver.sleep(25000);
      await driver.findElement(page.addnewuserSa.elements.alluserssearchfield).sendKeys(newname)
      //Approve the created user
      driver.sleep(5000);
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.viewicon)).click()
      driver.sleep(5000);
       //Approve and Reject
       if(actiontype == "Approve" || actiontype == "Suspend" || actiontype == "Reactivate" || actiontype == "Terminate"){
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnapprove))
        driver.sleep(5000);
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnapprove)).click() 
        driver.sleep(2000);
        const elmodalapproveuser = driver.findElement(page.addnewuserSa.elements.modalwindowdata);
        driver.wait(until.elementIsVisible(elmodalapproveuser),10000);
        var successmsgapprove = await driver.findElement(page.addnewuserSa.elements.modalwindowdata).getText()
        //Since the success message for suspend is different
        if(actiontype == "Suspend"){
          var verifymsg1 = shared.testData.suspendusersuccessmsgapprove1.trim();
          var verifymsg2 = shared.testData.suspendusersuccessmsgapprove2;
        }else if(actiontype == "Reactivate"){
          var verifymsg1 = shared.testData.reactivateusersuccessmsgapprove1.trim();
          var verifymsg2 = shared.testData.reactivateusersuccessmsgapprove2;
        }else if(actiontype == "Terminate"){
          var verifymsg1 = shared.testData.terminateusersuccessmsgapprove1.trim();
          var verifymsg2 = shared.testData.terminateusersuccessmsgapprove2;
        }
        else{
          var verifymsg1 = shared.testData.addusersuccessmsgapprove1.trim();
          var verifymsg2 = shared.testData.addusersuccessmsgapprove2;
        }
        //Verify the success message after clicking Approve button
        var successmsgsplitapprove = []; 
        successmsgsplitapprove = successmsgapprove.split("\n");
        if (successmsgsplitapprove[0].trim() === verifymsg1) {
          if (successmsgsplitapprove[1].trim() === newname.trim() + verifymsg2) {
              //await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
       }};
      }else if(actiontype == "Reject"){
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnreject))
        driver.sleep(5000);
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnreject)).click()
        //Reject Remarks
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.txtrejectremarks))
        await driver.findElement(page.addnewuserSa.elements.txtrejectremarks).sendKeys("Rejected Remarks")
        driver.wait(until.elementIsVisible(driver.findElement(page.addnewuserSa.elements.btnsubmit)),10000)
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnsubmit)).click()

        driver.sleep(2000);
        const elmodalrejectuser = driver.findElement(page.addnewuserSa.elements.modalwindowdata);
        driver.wait(until.elementIsVisible(elmodalrejectuser),10000);
        var successmsgreject = await driver.findElement(page.addnewuserSa.elements.modalwindowdata).getText()
  
        //Verify the success message after clicking Reject button
        var successmsgsplitreject = []; 
        successmsgsplitreject = successmsgreject.split("\n");
        if (successmsgsplitreject[0].trim() === shared.testData.addusersuccessmsgreject1.trim()) {
          if (successmsgsplitreject[1].trim() === shared.testData.addusersuccessmsgreject2.trim()) {
  
            //await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
       }}; 

      }  
  });


    this.Then(/^"([^"]*)" the user as a "([^"]*)"$/, { timeout: 100000}, async function (action,loginusertype) {

      let el = driver.findElement(page.addnewuserSa.elements.imgsidenavusername);
      driver.wait(until.elementIsVisible(el),50000);

      //Search for the new user
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserssearchfield))
      if((action == "Suspend" || action == "Reactivate" || action == "Terminate") && loginusertype == "Maker"){
        var newname1 = shared.testData.name_apr;
      }else if((action == "Suspend" || action == "Reactivate" || action == "Terminate") && loginusertype == "AA"){
        var newname1 = shared.testData.name_aa;
      }
     driver.sleep(25000);
      await driver.findElement(page.addnewuserSa.elements.alluserssearchfield).sendKeys(newname1)
      //Select the respective actions
      driver.sleep(5000);
      await driver.wait(until.elementLocated(page.addnewuserSa.elements.actionsicon)).click()
      driver.sleep(1000);
       //Suspend the user
       if(action == "Suspend"){
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.actsuspendeuser)).click()
        //Click the Yes button in the popup
        driver.sleep(1000);
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnyescontinue)).click()
        //Verify the modal message
        driver.sleep(1000);
        //For AA user
        if (loginusertype == "AA"){
          driver.sleep(2000);
          const elmodalsuspendaa = driver.findElement(page.addnewuserSa.elements.modalwindowdata_aa);
          driver.wait(until.elementIsVisible(elmodalsuspendaa),10000);
          var aamsgapprove = await driver.findElement(page.addnewuserSa.elements.modalwindowdata_aa).getText()
          //Verify the success message after clicking suspend button
            var aamsgsplitapprove = []; 
            aamsgsplitapprove = aamsgapprove.split("\n");
            if (aamsgsplitapprove[0].trim() === shared.testData.suspenduseraasuccessmessage1.trim()) {
              if (aamsgsplitapprove[1].trim() === newname1.trim() + shared.testData.suspenduseraasuccessmessage2) {
                  //await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
          }};
          //For Maker user
        }else{
          if(await driver.wait(until.elementLocated(page.addnewuserSa.elements.suspendmodalmsg1))){
              if(await driver.wait(until.elementLocated(page.addnewuserSa.elements.suspendmodalmsg2))){
                await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
                //Move the focus to the next tab and wait to remove the duplicate hidden DOM objects before logout
                driver.sleep(1000);
                await driver.findElement(page.addnewuserSa.elements.usergroupstab).click()
                driver.sleep(25000);
              }};
            }
          //Reactivate the user
       }else if(action == "Reactivate"){
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.actreactivateeuser)).click()
        //Click the Yes button in the popup
        driver.sleep(1000);
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnyescontinue)).click()
        //Verify the modal message
        driver.sleep(1000);
        //For AA user
        if (loginusertype == "AA"){
          const elmodalreactivateaa = driver.findElement(page.addnewuserSa.elements.modalwindowdata_aa);
          driver.wait(until.elementIsVisible(elmodalreactivateaa),10000);
          var aamsgapprove = await driver.findElement(page.addnewuserSa.elements.modalwindowdata_aa).getText()
          //Verify the success message after clicking reactivate button
            var aamsgsplitapprove = []; 
            aamsgsplitapprove = aamsgapprove.split("\n");
            if (aamsgsplitapprove[0].trim() === shared.testData.reactivateuseraasuccessmessage1.trim()) {
              if (aamsgsplitapprove[1].trim() === newname1.trim() + shared.testData.reactivateuseraasuccessmessage2) {
                  //await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
          }};
          //For Maker user
        }else{
        if(await driver.wait(until.elementLocated(page.addnewuserSa.elements.reactivatemodalmsg1))){
          if(await driver.wait(until.elementLocated(page.addnewuserSa.elements.reactivatemodalmsg2))){
            await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
            //Move the focus to the next tab and wait to remove the duplicate hidden DOM objects before logout
            driver.sleep(1000);
            await driver.findElement(page.addnewuserSa.elements.usergroupstab).click()
            driver.sleep(25000);
          }};
        };
       }
       //Terminate the user
       else if(action == "Terminate"){
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.actterminateeuser)).click()
        //Click the Yes button in the popup
        driver.sleep(1000);
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.btnyescontinue)).click()
        //Verify the modal message
        driver.sleep(1000);
        //For AA user
        if (loginusertype == "AA"){
          const elmodalterminateaa = driver.findElement(page.addnewuserSa.elements.modalwindowdata_aa);
          driver.wait(until.elementIsVisible(elmodalterminateaa),10000);
          var aamsgapprove = await driver.findElement(page.addnewuserSa.elements.modalwindowdata_aa).getText()
          //Verify the success message after clicking terminate button
            var aamsgsplitapprove = []; 
            aamsgsplitapprove = aamsgapprove.split("\n");
            if (aamsgsplitapprove[0].trim() === shared.testData.terminateuseraasuccessmessage1.trim()) {
              if (aamsgsplitapprove[1].trim() === newname1.trim() + shared.testData.terminateuseraasuccessmessage2) {
                  //await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
          }};
          //For Maker user
        }else {
        if(await driver.wait(until.elementLocated(page.addnewuserSa.elements.terminatemodalmsg1))){
          if(await driver.wait(until.elementLocated(page.addnewuserSa.elements.terminatemodalmsg1))){
            await driver.findElement(page.addnewuserSa.elements.confirmmodal).click()
            //Move the focus to the next tab and wait to remove the duplicate hidden DOM objects before logout
            driver.sleep(1000);
            await driver.findElement(page.addnewuserSa.elements.usergroupstab).click()
            driver.sleep(25000);
          }};
       }
      };
    });

    this.Then(/^Verify the export list for "([^"]*)"$/, { timeout: 200000 }, async function (logintype) {
        await driver.wait(until.elementLocated(page.addnewuserSa.elements.alluserstab))
        //To delete all te old files in the download folder
        purgedownloadoldfiles();
        //To click the Export List button
        await driver.findElement(page.addnewuserSa.elements.btnexportlist).click()
        driver.sleep(25000);
        if(logintype !== "Checker"){
          await driver.findElement(page.addnewuserSa.elements.btnadduser).click()
        }else if(logintype == "Checker"){
          await driver.findElement(page.addnewuserSa.elements.sidenavAdviseraccess).click()
        }
        driver.sleep(25000);
        //To verify the presence of the file in the download folder
        verifydownloadfile("Export_List_Hq_ All  Users_");

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