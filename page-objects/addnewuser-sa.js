module.exports = {

    elements: {
        loginlogo: by.className('login-logo'),
        username: by.name('username'),
        password: by.name('password'),
        btnloginnow: by.xpath("//button/div[contains(text(),'Log In Now')]"),
        imgsidenavusername: by.className('ant-typography side_nav_user_name'),
        sidenavusername: by.xpath("//span[@class='ant-typography side_nav_user_name']"),

        //Dashboard Objects - All Users tab
        tabs: by.xpath("//div[@class='tabs']"),
        alluserstab: by.xpath("//div[contains(text(),'All Users')]"),
        btnadduser: by.xpath("//button[*]/div[contains(text(),'Add User')]"),
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

        //All Users dashboard
        alluserssearchfield: by.xpath("//input[@placeholder='Search by User Name and ID, Department, User Group, Email']"),
        imgloading: by.xpath("//h1[normalize-space()='Loading...']"),
        viewicon: by.xpath("//div[@id='tableViewButton'][7]"),
        btnapprove: by.xpath("//div[normalize-space()='Approve']"),
        //Logout
        logout: by.xpath("//span[normalize-space()='Log Out']"),
        logoutmodal: by.id('continueModalBtn'),
        confirmmodal: by.id('confirmModalBtn')
    },

};

