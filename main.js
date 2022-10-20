// richiesta età e kilometri da percorrere
let age = Number (prompt('Please insert your age:'));
console.log (age)

let Km = Number (prompt('Please insert the Km of your travel:'));
console.log (Km)

let price = (Km * 0.21);
console.log (price)

let realPrice;
let fixedNum;
if (age < 18) {
    realPrice = (price - (price * 0.2));
    fixedNum = Math.round (realPrice*100)/100;
    console.log (fixedNum)
} else if (age >= 65){
    realPrice = (price - (price * 0.4));
    fixedNum = Math.round (realPrice*100)/100;
    console.log (fixedNum)
} 
else {
    console.log (price)
}