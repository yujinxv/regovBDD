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
    loginid: Math.floor((Math.random() * 1000) + 1) + "AutoNewuser",
    name: makeid(5) + "AutoNewuser",
    homebranch: "Seremban",
    dept: "CE",
    email: Math.floor((Math.random() * 1000) + 1) + "AutoNewusermail@mail.com",
    mobileno: "765875432",
    description: "Auto Test Desc",
    assigngroup: "CE HQ",
    addusersuccessmsg1: "New User created successfully",
    addusersuccessmsg2: "This request has been submitted and pending for review.",
    addusersuccessmsgapprove1: "New User request approved",
    addusersuccessmsgapprove2: " account has been created and the maker will be notified.",
    addusersuccessmsgaa1: "New User created successfully",
    addusersuccessmsgaa2: " has been created.",
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