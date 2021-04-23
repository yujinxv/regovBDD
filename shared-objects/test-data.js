module.exports = {
    url: "https://sit.kiboperations.com/",
    username_maker: "muralisamkr",
    username_checker: "muralisackr",
    username_aa: "muralisaaa",
    siturl: "https://sit.kiboperations.com/",
    uaturl: "https://uat.kiboperations.com/",
    samkrusername: "muralisamkr",
    brmkrusername: "eugenebrmkr",
    brckrusername: "eugenebrckr",
    fmmkrusername: "eugenefmmkr",
    fmckrusername: "eugenefmckr",
    password: "Abcd123@",

    //All Users tab
    //=============Login Id's========================
    loginid_mkr: Math.floor((Math.random() * 1000) + 1) + "mkr"+"AutoNewuser",
    loginid_aa: Math.floor((Math.random() * 1000) + 1) + "AA"+"AutoNewuser",
    loginid_apr: Math.floor((Math.random() * 1000) + 1) + "Apr"+"AutoNewuser",
    loginid_rej: Math.floor((Math.random() * 1000) + 1) + "Rej"+"AutoNewuser",
    //===============Name==============================
    name_mkr: makeid(5) + "mkr"+"AutoNewuser",
    name_aa: makeid(5) + "AA"+"AutoNewuser",
    name_apr: makeid(5) + "Apr"+"AutoNewuser",
    name_rej: makeid(5) + "Rej"+"AutoNewuser",

    homebranch: "Seremban",
    dept: "CE",
    //===============Email==============================
    email_mkr: Math.floor((Math.random() * 1000) + 1) + "mkr"+"AutoNewusermail@mail.com",
    email_aa: Math.floor((Math.random() * 1000) + 1) + "AA"+"AutoNewusermail@mail.com",
    email_apr: Math.floor((Math.random() * 1000) + 1) + "Apr"+"AutoNewusermail@mail.com",
    email_rej: Math.floor((Math.random() * 1000) + 1) + "Rej"+"AutoNewusermail@mail.com",
 
    mobileno: "765875432",
    description: "Auto Test Desc",
    assigngroup: "CE HQ",
    addusersuccessmsg1: "New User created successfully",
    addusersuccessmsg2: "This request has been submitted and pending for review.",
    addusersuccessmsgapprove1: "New User request approved",
    addusersuccessmsgapprove2: " account has been created and the maker will be notified.",
    addusersuccessmsgaa1: "New User created successfully",
    addusersuccessmsgaa2: " has been created.",
    addusersuccessmsgreject1: "Edit User request rejected",
    addusersuccessmsgreject2: "The maker will be notified.",
    suspendusersuccessmsgapprove1: "New User Suspend request approved",
    suspendusersuccessmsgapprove2: " account has been suspended and the maker will be notified.",
    reactivateusersuccessmsgapprove1: "Reactivate User request approved",
    reactivateusersuccessmsgapprove2: " account has been enabled and the maker will be notified.",
    terminateusersuccessmsgapprove1: "User Termination request approved",
    terminateusersuccessmsgapprove2: " user has been terminated and the maker will be notified.",
    suspenduseraasuccessmessage1: "User suspended successfully",
    suspenduseraasuccessmessage2: " account has been suspended.",
    reactivateuseraasuccessmessage1: "User reactivated successfully",
    reactivateuseraasuccessmessage2: " account has been activated.",
    terminateuseraasuccessmessage1: "User terminated successfully",
    terminateuseraasuccessmessage2: " account has been terminated.",

    //Roles & Permission tab
    addrolesuccessmsg1: "New Role request submitted",
    addrolesuccessmsg2: "This request has been submitted and pending for review.",
    rolename_mkrappr: "Autoroleuser"+makeid(5) + "mkrappr",
    rolename_mkrrej: "Autoroleuser"+makeid(5) + "mkrrej",
    rolename_aa: "Autoroleuser"+makeid(5) + "aa",
    roledescription: "Auto Test Desc",
    addrolesuccessmsgapprove1: "Role request approved",
    addrolesuccessmsgapprove2: " has been created and the maker will be notified.",
    suspendrolesuccessmsgapprove1: "Suspend Role request approved",
    suspendrolesuccessmsgapprove2: " has been suspended and the maker will be notified.",
    reactivaterolesuccessmsgapprove1: "Reactivate Role request approved",
    reactivaterolesuccessmsgapprove2: " has been reactivated and the maker will be notified.",
    deleterolesuccessmsgapprove1: "Delete Role request approved",
    deleterolesuccessmsgapprove2: " has been deleted and the maker will be notified.",
    addrolesuccessmsgreject1: "Role request rejected",
    addrolesuccessmsgreject2: "The maker will be notified.",
    addrolesuccessmsgaa1: "New Role created successfully",
    addrolesuccessmsgaa2: " has been created",
    suspendroleaasuccessmessage1: "User role suspended successfully",
    suspendroleaasuccessmessage2: " user role has been suspended.",
    reactivateroleaasuccessmessage1: "User role reactivated successfully",
    reactivateroleaasuccessmessage2: " user role has been activated.",
    deleteroleaasuccessmessage1: "User role deleted successfully",
    deleteroleaasuccessmessage2: " user role has been deleted.",

};
//Function to generate random strings
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }