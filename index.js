let person1 = {
    userId: 0001,
    name: "Hannes",
    userName: "Hansi",
    password: "gafsgfe5",
    age: "19",
    language: "German", 
    country: "Germany",
    subStatus: "Unsubscribt",
}

let person2 = {
    userId: 0002,
    name: "Lisa",
    userName: "Lissi1",
    password: "hhga",
    age: "25",
    language: "English", 
    country: "Great Britain",
    subStatus: "Subscribt",
}

let person3 = {
    userId: 0003,
    name: "Max",
    userName: "Bob16",
    password: "ohcackav",
    age: "14",
    language: "English", 
    country: "Great Britain",
    subStatus: "Unsubscribt",
}

let person4 = {
    userId: 0004,
    name: "Kevin",
    userName: "kevkev",
    password: "544557",
    age: "16",
    language: "German", 
    country: "Austria",
    subStatus: "Subscribt",
}

// input 

// let inputName = "Hannes";
// let inputPassword = "gafsgfe5"; 

// let inputName ="Lisa";
// let inputPassword = "hhga"; 

// let inputName = "Max"; 
// let inputPassword = "ohcackav"; 

let inputName = "Kevin"; 
let inputPassword = "544557"; 


if (person4.name === inputName) {
    checkUsername = true;
} else { checkUsername = false } 

if (person4.password === inputPassword) {
    checkPassword = true;
} else { checkPassword = false }

if (checkUsername && checkPassword) {
    if (person4.language === "German") {console.log("Guten Tag " + person4.userName)
    } else {console.log("welcome " + person4.userName)}  
} else { 
    if (person4.language === "German") {console.log("Dein Username oder Passwort ist falsch, versuche es nocheinmal.")}
    else {console.log("Your Username or Password is wrong, try again") }   
}
