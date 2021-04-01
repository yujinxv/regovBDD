module.exports = {

    elements: {
        loginlogo: by.className('login-logo'),
        username: by.name('username'),
        password: by.name('password'),
        btnloginnow: by.xpath("//button/div[contains(text(),'Log In Now')]"),
        imgsidenavusername: by.className('ant-typography side_nav_user_name'),
        sidenavusername: by.xpath("//span[@class='ant-typography side_nav_user_name']"),

        //Dashboard Objects - All Users tab
        alluserstab: by.xpath("//div[contains(text(),'All Users')]"),
        btnadduser: by.xpath("//button[*]/div[contains(text(),'Add User')]"),
        txtloginid: by.xpath("//input[@name='loginID']"),
        txtname: by.xpath("//input[@name='name']"),
        drphomebranch: by.xpath("//div[contains(text(),'Home Branch')]/following-sibling::div[starts-with(@class,'ant-select ant-select-lg')]"),
        drpdept: by.xpath("//div[contains(text(),'Departments')]/following-sibling::div[starts-with(@class,'ant-select ant-select-lg')]"),
        txtemail: by.xpath("//input[@name='email']"),
        txtmobile: by.xpath("//input[@placeholder='12 345 6789']"),
        txtdescription: by.xpath("//textarea[@name='description']"),
        ddassignusergroup: by.xpath("//div[contains(text(),'User Group')]/following-sibling::div[starts-with(@class,'sc')]"),
        btnsave: by.xpath("//div[normalize-space()='Save']"),
        btncancel: by.xpath("//div[normalize-space()='Cancel']"),

        //Logout
        logout: by.xpath("//span[normalize-space()='Log Out']"),
        logoutmodal: by.id('continueModalBtn'),
        logoutconfirmmodal: by.id('confirmModalBtn')
    },



};