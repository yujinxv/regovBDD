module.exports = {

    elements: {
        
        //Dashboard Objects - Roles & Permissions tab
        rolespermissiontab: by.xpath("//div[contains(text(),'Roles & Permissions')]"),
        btnaddrole: by.xpath("//button[*]/div[contains(text(),'Add Role')]"),
        txtrolename: by.xpath("//input[@validationmessage='Role Name']"),
        txtroledesc: by.xpath("//*[contains(text(),'Role Description (optional)')]/following-sibling::textarea"),
        radbtnbranchbo: by.xpath("//*[contains(text(),'Branch Backoffice')]/ancestor::div[@id='radioBtn']"),
        radbtnhqbo: by.xpath("//*[contains(text(),'HQ Backoffice')]/ancestor::div[@id='radioBtn']"),
        btnsave: by.xpath("//div[normalize-space()='Save']"),
        modalwindowdata: by.xpath("//div[@class='ant-modal-body']"),
        rolesearchfield: by.xpath("//input[@placeholder='Search roles & Permissions by Role Name']"),
        actionsicon: by.xpath("//*[@id='tableViewButton']/following::div[contains(@id,'setShowBtn')]"),
        viewicon: by.xpath("//div[@id='tableViewButton'][6]"),
        btnapprove: by.xpath("//div[normalize-space()='Approve']"),
        btnreject: by.xpath("//div[normalize-space()='Reject']"),
        actsuspendrole: by.xpath("//div[contains(text(),'Suspend Role')]"),
        btnyescontinue: by.id('continueModalBtn'),
        suspendrolemodalmsg1: by.xpath("//*[contains(text(),'Suspend user role request submitted')]"),
        suspendrolemodalmsg2: by.xpath("//*[contains(text(),'This request has been submitted and pending for review.')]"),
        actreactivaterole: by.xpath("//div[contains(text(),'Reactivate Role')]"),
        reactivaterolemodalmsg1: by.xpath("//*[contains(text(),'Reactivate user role request submitted')]"),
        reactivaterolemodalmsg2: by.xpath("//*[contains(text(),'This request has been submitted and pending for review.')]"),
        actdeleterole: by.xpath("//div[contains(text(),'Delete Role')]"),
        deleterolemodalmsg1: by.xpath("//*[contains(text(),'Delete user role request submitted')]"),
        deleterolemodalmsg2: by.xpath("//*[contains(text(),'This request has been submitted and pending for review.')]"),
        btnreject: by.xpath("//div[normalize-space()='Reject']"),
        txtrejectremarks: by.xpath("//textarea[@name='rejectRemark']"),
        modalwindowdata_aa: by.xpath("//*[contains(text(),'successfully')]/ancestor::div[@class='ant-modal-body']"),
        btnexportlist: by.xpath("//*[@id='exportSecondaryBtn']//div[contains(text(),'Export List')]"),

        //Logout
        logout: by.xpath("//span[normalize-space()='Log Out']"),
        //logoutmodal: by.xpath("//span[contains(text(),'Yes, Logout')]"),
        logoutmodal: by.id('continueModalBtn'),
        confirmmodal: by.id('confirmModalBtn')
    },

};

