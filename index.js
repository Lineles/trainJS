
// German test 
// let userNameInput = "Hansi"; 
// let userPasswortInput = "gafsgfe5";

// let userNameInput = "kevkev"; 
// let userPasswortInput = "544557";


// English test 
// let userNameInput = "Bob16"; 
// let userPasswortInput = "ohcackav";

let userNameInput = "Lissi1"; 
let userPasswortInput = "hhga";


// Spanish test 
// let userNameInput = "Melli"; 
// let userPasswortInput = "gaf656465255";

// let userNameInput = "Jogi"; 
// let userPasswortInput = "gafddfsddddss5";


// // Wrong Passwort
// let userNameInput = "Bob16"; 
// let userPasswortInput = "544f557";

// // Wrong Username
// let userNameInput = "Jopppgi"; 
// let userPasswortInput = "gafddfsddddss5";





//
// Data Base 
//

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
    sex: "male"
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
    sex: "female",
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
    sex: "male",
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
    sex: "male",
}
UserDataBase.push(kevkev); 

let Melli = {
    userId: 0006,
    name: "Melissa",
    userName: "Melli",
    password: "gaf656465255",
    age: "32",
    language: "Spanish", 
    country: "Spain",
    subStatus: "subscribt",
    sex: "female",
}
UserDataBase.push(Melli); 

let Jogi = {
    userId: 0005,
    name: "Jochen",
    userName: "Jogi",
    password: "gafddfsddddss5",
    age: "45",
    language: "Spanish", 
    country: "Spain",
    subStatus: "Unsubscribt",
    sex: "male",
}
UserDataBase.push(Jogi); 



//
// Dater Base Check
//
for (i = 0; i < UserDataBase.length; i++) {
    if  (UserDataBase[i].userName !== userNameInput) {
        // console.log("no match found")
    } else { var logedInUser = UserDataBase[i]; 

        //
        // Password check
        //
        if (logedInUser.password === userPasswortInput) {
            checkPassword = true;
        } else { checkPassword = false }

        if (logedInUser.userName === userNameInput) {
            checkUsername = true;
        } else { checkUsername = false }


        if (checkUsername && checkPassword) {
        
            //
            // Substatus Check 
            //
            if (logedInUser.subStatus === "Subscribt") { 
                accesEnglish = "You have full acces to  all content!";
                accesGerman = "Du hast vollen zugriff auf den Content!";
                accesSpanish = "Tienes acceso completo a todo el contenido!"; 
            } else { 
                accesEnglish = "Subscribe to get ful acces to all the content!";
                accesGerman =  "Subscribe um vollen zugriff auf all den Content zu bekommen!";
                accesSpanish =  "Suscríbete para tener acceso completo a todo el contenido!"
             }

            //
            // Language check & console.log
            //
            if (logedInUser.language === "German") {
                console.log("Guten Tag " + logedInUser.name);
                console.log(accesGerman);
            } else if (logedInUser.language === "Spanish") {
                if (logedInUser.sex === "male") {
                    console.log("bienvenidos " + logedInUser.name);
                } else {
                    console.log("bienvenidas " + logedInUser.name);
                }
                console.log(accesSpanish);
            }  else { 
                console.log("welcome " + logedInUser.name);
                console.log(accesEnglish); }

        } else { 
            if (logedInUser.language === "German") {console.log("Dein Passwort ist falsch, versuche es nocheinmal.")}
            else {console.log("Your Password is wrong, try again") }   
        }
    }
}


