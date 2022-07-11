






// 
// Defalt shop Item!!!
//
// let shopItem = {
//     name: "Objekt",
//     kategory: "Drinks",
//     fullprice: 10,
//     discount: "30%",
//     stock: 12,
//     inCart: false, 
// }
// shopItemArray.push(shopItem);




///
const cart = [ ]; 
const shopItemArray = [ ]; 
const stockArray = [ ];
// 
////////////////////////////////////////////////// Shop Array daterbase !!! /////////////////////////////////////////////////////////////////////////////////////
//


let nesbresso = {
    name: "Nesbresso",
    kategory: "Drinks",
    fullprice: 10,
    discount: "30%",
    stock: 12,
    inCart: 0, 
    price: 0, 
}
shopItemArray.push(nesbresso);

let affroKaffee = {
    name: "Affro Kaffee",
    kategory: "Drinks",
    fullprice: 10,
    discount: "20%",
    stock: 12,
    inCart: 2, 
    price: 0, 
}
shopItemArray.push(affroKaffee);

let shopItem = {
    name: "Objekt",
    kategory: "Drinks",
    fullprice: 10,
    discount: "0%",
    stock: 12,
    inCart: 0, 
    price: 0, 
}
shopItemArray.push(shopItem);


// 
////////////////////////////////////////////////// Stock !!! /////////////////////////////////////////////////////////////////////////////////////
//

for (let i = 0; i < shopItemArray.length; i++) {
    if (shopItemArray[i].inCart !== 0) {
        stock = shopItemArray[i].stock -= shopItemArray[i].inCart;
    } else { stock = shopItemArray[i].stock
    }
     shopItemArray[i].stock = stock;

    // console.log("Current Stock: " + shopItemArray[i].name + " -- " + shopItemArray[i].stock);
}
  

// 
//////////////////////////////////////////////////Item Price Calculatiun!!! /////////////////////////////////////////////////////////////////////////////////////
//

for (let i = 0; i < shopItemArray.length; i++) {
 
    
    if (shopItemArray[i].discount ===  "60%") {
        price = shopItemArray[i].fullprice * 0.4;
    } else if (shopItemArray[i].discount === "50%"){
        price = shopItemArray[i].fullprice * 0.5;
    } else if (shopItemArray[i].discount === "40%") {
        price = shopItemArray[i].fullprice * 0.6;
    } else if (shopItemArray[i].discount ===  "30%") {
        price = shopItemArray[i].fullprice * 0.7;
    } else if (shopItemArray[i].discount ===  "20%") {
        price = shopItemArray[i].fullprice * 0.8;
    } else if (shopItemArray[i].discount === "10%"){
        price = shopItemArray[i].fullprice * 0.9;
    } else if (shopItemArray[i].discount === "5%") {
        price = shopItemArray[i].fullprice * 0.95;
    } else { price = shopItemArray[i].fullprice;
    }
    shopItemArray[i].price = price;
    
    // console.log(shopItemArray[i].name + ": " + shopItemArray[i].price + "€"); 
}

// 
//////////////////////////////////////////////////Cart check!!! /////////////////////////////////////////////////////////////////////////////////////
//

for (i = 0; i < shopItemArray.length; i++) {
    if (shopItemArray[i].inCart !== 0) {    
    cart.push(shopItemArray[i]); 
    } 
}

// 
//////////////////////////////////////////////////Shopping Cart Price!!! /////////////////////////////////////////////////////////////////////////////////////
//
let totalCart = 0; 
for (let i = 0; i < cart.length; i++) {
    totalCart = cart[i].price * cart[i].inCart + totalCart;
}

////////////////////////////////////////////////// Outputs !!! /////////////////////////////////////////////////////////////////////////////////////
//

console.log("Items in Shop: " + shopItemArray.length);
console.log("Items in Cart: " + cart.length);
console.log("Total Price: " + totalCart +"€");