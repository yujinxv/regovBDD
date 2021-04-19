module.exports = {

    elements: {
        loginlogo: by.className('login-logo'),
        username: by.name('username'),
        password: by.name('password'),
        btnloginnow: by.xpath("//button/div[contains(text(),'Log In Now')]"),
        imgsidenavusername: by.className('ant-typography side_nav_user_name'),
        sidenavusername: by.xpath("//span[@class='ant-typography side_nav_user_name']"),
        sidenavdashboard: by.xpath("//*[@id='titleBtn'][contains(text(),'Dashboard')]"),
        sidenavAdviseraccess: by.xpath("//*[@id='titleBtn'][contains(text(),'Advisers Access')]"),
        //Dashboard Objects - All Users tab
        tabs: by.xpath("//div[@class='tabs']"),
        alluserstab: by.xpath("//div[contains(text(),'All Users')]"),
        usergroupstab: by.xpath("//div[contains(text(),'User Groups')]"),
        btnadduser: by.xpath("//button[*]/div[contains(text(),'Add User')]"),
        btnexportlist: by.xpath("//*[@id='exportSecondaryBtn']//div[contains(text(),'Export List')]"),
        txtloginid: by.xpath("//input[@name='loginID']"),
        txtname: by.xpath("//input[@name='name']"),
        drphomebranch: by.xpath("//div[contains(text(),'Home Branch')]/following-sibling::div[starts-with(@class,'ant-select ant-select-lg')]"),
        drphomebranchlist: by.xpath("//div[contains(@class,'ant-select-item-option-content')]/following::div[contains(text(),'Seremban')]"),
        drpdept: by.xpath("//div[contains(text(),'Departments')]/following-sibling::div[starts-with(@class,'ant-select ant-select-lg')]"),
        drpdeptlist: by.xpath("//div[contains(@class,'ant-select-item-option-content')]/following::div[contains(text(),'Operations')]"),
        txtemail: by.xpath("//input[@name='email']"),
        txtmobile: by.xpath("//input[@placeholder='12 345 6789']"),
        txtdescription: by.xpath("//textarea[@name='description']"),
        //ddassignusergroup: by.xpath("//div[contains(text(),'User Group')]/following-sibling::div[starts-with(@class,'sc')]"),
        ddassignusergroup: by.xpath("//*[contains(@id,'handleOSelectButton')]"),
        drpassigngrouplist: by.xpath("//*[text()='Checker HQ']"),
        btnsave: by.xpath("//div[normalize-space()='Save']"),
        btncancel: by.xpath("//div[normalize-space()='Cancel']"),
        modalwindowdata: by.xpath("//div[@class='ant-modal-body']"),
        modalwindowdata_aa: by.xpath("//*[contains(text(),'successfully')]/ancestor::div[@class='ant-modal-body']"),
  
        //All Users dashboard
        alluserssearchfield: by.xpath("//input[@placeholder='Search by User Name and ID, Department, User Group, Email']"),
        imgloading: by.xpath("//h1[normalize-space()='Loading...']"),
        viewicon: by.xpath("//div[@id='tableViewButton'][7]"),
        btnapprove: by.xpath("//div[normalize-space()='Approve']"),
        btnreject: by.xpath("//div[normalize-space()='Reject']"),
        txtrejectremarks: by.xpath("//textarea[@name='rejectRemark']"),
        btnsubmit: by.xpath("//div[normalize-space()='Submit']"),
        actionsicon: by.xpath("//*[@id='tableViewButton']/following::div[contains(@id,'setShowBtn')]"),
        actsuspendeuser: by.xpath("//div[contains(text(),'Suspend User')]"),
        actreactivateeuser: by.xpath("//div[contains(text(),'Reactivate User')]"),
        actterminateeuser: by.xpath("//div[contains(text(),'Terminate User')]"),
        btnyescontinue: by.id('continueModalBtn'),
        suspendmodalmsg1: by.xpath("//*[contains(text(),'Suspend User request submitted')]"),
        suspendmodalmsg2: by.xpath("//*[contains(text(),'This request has been submitted and pending for review.')]"),
        reactivatemodalmsg1: by.xpath("//*[contains(text(),'Reactivate User request submitted')]"),
        reactivatemodalmsg2: by.xpath("//*[contains(text(),'This request has been submitted and pending for review.')]"),
        terminatemodalmsg1: by.xpath("//*[contains(text(),'Terminate User request submitted')]"),
        terminatemodalmsg2: by.xpath("//*[contains(text(),'This request has been submitted and pending for review.')]"),
        
        //Logout
        logout: by.xpath("//span[normalize-space()='Log Out']"),
        //logoutmodal: by.xpath("//span[contains(text(),'Yes, Logout')]"),
        logoutmodal: by.id('continueModalBtn'),
        confirmmodal: by.id('confirmModalBtn')
    },

};

