module.exports = {
        elements: {
            loginlogo: by.className('login-logo'),
            username: by.name('username'),
            password: by.name('password'),
            btnloginnow: by.xpath("//button/div[contains(text(),'Log In Now')]"),
            imgsidenavusername: by.className('ant-typography side_nav_user_name'),
            sidenavusername: by.xpath("//span[@class='ant-typography side_nav_user_name']"),

            //dashboard
            transactions: by.xpath("//span[@class='ant-typography search_title']"),
            noTransactions: by.xpath("//div//text[contains(text(),'No upcoming transactions yet')]"),

            //all tabs
            dailytab: by.xpath("//div[contains(text(),'daily')]"),
            upcoming: by.xpath("//div[contains(text(),'upcoming')]"),
            withPhysicaldoc: by.xpath("//div[contains(text(),'with physical doc')]"),
            rerouted: by.xpath("//div[contains(text(),'rerouted')]"),
            history: by.xpath("//div[contains(text(),'history')]"),

            //Download Reports
            exportlistbtn: by.xpath("//button/div[contains(text(),'Export List')]"),
        
            //Logout
            logout: by.xpath("//span[normalize-space()='Log Out']"),
            logoutmodal: by.id('continueModalBtn'),
            confirmmodal: by.id('confirmModalBtn')
        }
}