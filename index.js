// let userNameInput = "Hansi"; 
// let userPasswortInput = "gafsgfe5";

// let userNameInput = "Bob16"; 
// let userPasswortInput = "ohcackav";

// let userNameInput = "Lissi1"; 
// let userPasswortInput = "hhga";

// let userNameInput = "kevkev"; 
// let userPasswortInput = "544557";

let userNameInput = "Bob16"; 
let userPasswortInput = "544f557";





const UserDataBase = [];

let Hansi = {
    userId: 0001,
    name: "Hannes",
    userName: "Hansi",
    password: "gafsgfe5",
    age: "19",
    language: "German", 
    country: "Germany",
    subStatus: "Unsubscribt",
}
UserDataBase.push(Hansi); 

let Lissi1 = {
    userId: 0002,
    name: "Lisa",
    userName: "Lissi1",
    password: "hhga",
    age: "25",
    language: "English", 
    country: "Great Britain",
    subStatus: "Subscribt",
}
UserDataBase.push(Lissi1); 

let Bob16 = {
    userId: 0003,
    name: "Max",
    userName: "Bob16",
    password: "ohcackav",
    age: "14",
    language: "English", 
    country: "Great Britain",
    subStatus: "Unsubscribt",
}
UserDataBase.push(Bob16); 

let kevkev = {
    userId: 0004,
    name: "Kevin",
    userName: "kevkev",
    password: "544557",
    age: "16",
    language: "German", 
    country: "Austria",
    subStatus: "Subscribt",
}
UserDataBase.push(kevkev); 


for (i = 0; i < UserDataBase.length; i++) {
    if  (UserDataBase[i].userName === userNameInput) {
        var logedInUser = UserDataBase[i]; 
    } 
}

if (logedInUser.password === userPasswortInput) {
    checkPassword = true;
} else { checkPassword = false }

if (logedInUser.userName === userNameInput) {
    checkUsername = true;
} else { checkUsername = false }


if (checkUsername && checkPassword) {
    if (logedInUser.language === "German") {console.log("Guten Tag " + logedInUser.name)
    } else {console.log("welcome " + logedInUser.name)}  
} else { 
    if (logedInUser.language === "German") {console.log("Dein Username oder Passwort ist falsch, versuche es nocheinmal.")}
    else {console.log("Your Username or Password is wrong, try again") }   
}
