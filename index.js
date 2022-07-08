let userNameInput = "Bob16"; 
let userPasswortInput = "";

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
        console.log("ok");
    } else { 
        console.log("nononon");
    }  
 }




// if (person4.name === inputName) {
//     checkUsername = true;
// } else { checkUsername = false } 

// if (person4.password === inputPassword) {
//     checkPassword = true;
// } else { checkPassword = false }

// if (checkUsername && checkPassword) {
//     if (person4.language === "German") {console.log("Guten Tag " + person4.userName)
//     } else {console.log("welcome " + person4.userName)}  
// } else { 
//     if (person4.language === "German") {console.log("Dein Username oder Passwort ist falsch, versuche es nocheinmal.")}
//     else {console.log("Your Username or Password is wrong, try again") }   
// }
