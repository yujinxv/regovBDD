module.exports = {
    url: "https://sit.kiboperations.com/",
    username: "muralisamkr",
    password: "Abcd123@",
    //All Users tab
    loginid: Math.floor((Math.random() * 100) + 1) + "AutoNewuser",
    name: makeid(5) + "_AutoNewuser ",
    homebranch: "Seremban",
    dept: "CE",
    email: Math.floor((Math.random() * 100) + 1) + "AutoNewusermail@mail.com",
    mobileno: "765875432",
    description: "Auto Test Desc",
    assigngroup: "CE HQ",


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