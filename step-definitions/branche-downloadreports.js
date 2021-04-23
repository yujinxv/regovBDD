const helpers = require("../runtime/helpers.js");
const utilfn = require("selenium-cucumber-js/node_modules/selenium-webdriver/lib/until");
const libwebdriver = require("selenium-cucumber-js/node_modules/selenium-webdriver/lib/webdriver");

module.exports = function () {
  this.Given(
    /^Login page is displayed$/,
    { timeout: 100000 },
    async function () {
      await helpers.loadPage(shared.testData.url);
      //launch browser for OMNI

      driver.manage().window().maximize();
      driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.loginlogo)
      );
    }
  );

  this.Then(
    /^Login as Branch "([^"]*)"$/,
    { timeout: 100000 },
    async function (usertype) {
      //login as Branch Maker user

      if (usertype == "Maker") {
        usertype = shared.testData.brmkrusername;
      } else if (usertype == "Checker") {
        usertype = shared.testData.brckrusername;
      } else if (usertype == "AA") {
        usertype = shared.testData.braausername;
      }

      const elementusername = await driver.findElement(
        page.brancheDownloadreports.elements.username
      );
      elementusername.sendKeys(usertype);
      const elementpassword = await driver.findElement(
        page.brancheDownloadreports.elements.password
      );
      elementpassword.sendKeys(shared.testData.password);

      await driver
        .findElement(page.brancheDownloadreports.elements.btnloginnow)
        .click();
      await driver.wait(
        until.elementLocated(
          page.brancheDownloadreports.elements.imgsidenavusername
        )
      );
    }
  );

  this.Then(
    /^Click the Export List button in Daily tab$/,
    { timeout: 100000 },
    async function () {
      // Branch user to download export list in daily tab

      await driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.transactions)
      );

      driver.sleep(5000);

      await driver
        .findElement(page.brancheDownloadreports.elements.exportlistbtn)
        .click();
      driver.sleep(5000);

      await driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.transactions)
      );
    }
  );

  this.Then(
    /^Branch "([^"]*)" Download Export List from Upcoming tab$/,
    { timeout: 100000 },
    async function (user) {
      // Branch user download export list from Upcoming tab
      if (user == "Maker") {
        usertype = shared.testData.brmkrusername;
      } else if (user == "Checker") {
        user = shared.testData.brckrusername;
      } else if (user == "AA") {
        user = shared.testData.braausername;
      }

      const trans = await driver.findElement(
        page.brancheDownloadreports.elements.transactions
      );
      console.log("transactions", trans);

      await driver
        .findElement(page.brancheDownloadreports.elements.upcoming)
        .click();

      driver.sleep(8000);

      const exportButton = await driver.findElement(
        page.brancheDownloadreports.elements.exportlistbtn
      );
      const isExportEnabled = await exportButton.isEnabled();
      console.log("isExportEnabled", isExportEnabled);
      if (isExportEnabled) {
        await exportButton.click();
        driver.sleep(5000);
      } else {
        console.log("skip");
      }
    }
  );

  this.Then(
    /^Branch "([^"]*)" Download Export List from With Physical Doc tab$/,
    { timeout: 100000 },
    async function (user) {
      // Branch User download export list With Pysical Doc tab
      if (user == "Maker") {
        usertype = shared.testData.brmkrusername;
      } else if (user == "Checker") {
        user = shared.testData.brckrusername;
      } else if (user == "AA") {
        user = shared.testData.braausername;
      }

      await driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.transactions)
      );

      driver.sleep(6000);

      await driver
        .findElement(page.brancheDownloadreports.elements.withPhysicaldoc)
        .click();
      driver.sleep(5000);

      await driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.exportlistbtn)
      );

      await driver
        .findElement(page.brancheDownloadreports.elements.exportlistbtn)
        .click();
      driver.sleep(5000);

      await driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.transactions)
      );
    }
  );

  this.Then(
    /^Branch "([^"]*)" Download Export List from Rerouted tab$/,
    { timeout: 100000 },
    async function (user) {
      // Branch user download export list With rerouted tab
      if (user == "Maker") {
        usertype = shared.testData.brmkrusername;
      } else if (user == "Checker") {
        user = shared.testData.brckrusername;
      } else if (user == "AA") {
        user = shared.testData.braausername;
      }

      await driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.transactions)
      );

      await driver
        .findElement(page.brancheDownloadreports.elements.rerouted)
        .click();
      driver.sleep(5000);

      await driver
        .findElement(page.brancheDownloadreports.elements.exportlistbtn)
        .click();
      driver.sleep(5000);

      await driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.transactions)
      );
    }
  );

  this.Then(
    /^Branch "([^"]*)" Download Export List from History tab$/,
    { timeout: 100000 },
    async function (user) {
      // Branch user download export list With History tab
      if (user == "Maker") {
        usertype = shared.testData.brmkrusername;
      } else if (user == "Checker") {
        user = shared.testData.brckrusername;
      } else if (user == "AA") {
        user = shared.testData.braausername;
      }

      await driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.transactions)
      );

      await driver
        .findElement(page.brancheDownloadreports.elements.history)
        .click();
      driver.sleep(5000);

      await driver
        .findElement(page.brancheDownloadreports.elements.exportlistbtn)
        .click();
      driver.sleep(5000);

      await driver.wait(
        until.elementLocated(page.brancheDownloadreports.elements.transactions)
      );
    }
  );

  this.Then(/^Click Logout$/, { timeout: 20000 }, async function () {
    //Logout from the application

    await driver
      .findElement(page.brancheDownloadreports.elements.logout)
      .click();
    driver.wait(
      until.elementIsVisible(
        driver.findElement(page.addnewuserSa.elements.logoutmodal)
      ),
      10000
    );
    await driver
      .findElement(page.brancheDownloadreports.elements.logoutmodal)
      .click();
    driver.sleep(1000);
    await driver
      .findElement(page.brancheDownloadreports.elements.confirmmodal)
      .click();
  });
};
