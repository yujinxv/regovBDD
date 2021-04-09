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
    loginid_sus: Math.floor((Math.random() * 1000) + 1) + "Sus"+"AutoNewuser",
    loginid_react: Math.floor((Math.random() * 1000) + 1) + "React"+"AutoNewuser",
    loginid_term: Math.floor((Math.random() * 1000) + 1) + "Tmt"+"AutoNewuser",
    //===============Name==============================
    name_mkr: makeid(5) + "mkr"+"AutoNewuser",
    name_aa: makeid(5) + "AA"+"AutoNewuser",
    name_apr: makeid(5) + "Apr"+"AutoNewuser",
    name_rej: makeid(5) + "Rej"+"AutoNewuser",
    name_sus: makeid(5) + "Sus"+"AutoNewuser",
    name_react: makeid(5) + "React"+"AutoNewuser",
    name_term: makeid(5) + "Tmt"+"AutoNewuser",

    homebranch: "Seremban",
    dept: "CE",
    //===============Email==============================
    email_mkr: Math.floor((Math.random() * 1000) + 1) + "mkr"+"AutoNewusermail@mail.com",
    email_aa: Math.floor((Math.random() * 1000) + 1) + "AA"+"AutoNewusermail@mail.com",
    email_apr: Math.floor((Math.random() * 1000) + 1) + "Apr"+"AutoNewusermail@mail.com",
    email_rej: Math.floor((Math.random() * 1000) + 1) + "Rej"+"AutoNewusermail@mail.com",
    email_sus: Math.floor((Math.random() * 1000) + 1) + "Sus"+"AutoNewusermail@mail.com",

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