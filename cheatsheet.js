/* 
const, let, var kulcsszavakkal hozunk létre változókat

változó neve = ehhez tartozó érték

primitívek: string, number, boolean, undefined, null
*/

let aString = "this is a string"; // MINDIG idézőjelbe tesszük a stringet, backtickel ` több soros stringet tudunk létrehozni, a másik két fajta idézőjellel, pedig egysorosat //

let aNumber = 1; // nem szabad idézőjelbe tenni

let aBoolean = false; // nem szabad idézőjelbe tenni

let anUndefined = undefined; // nem szabad idézőjelbe tenni

let aNull = null; // nem szabad idézőjelbe tenni

let notANumber = NaN; // nem szabad idézőjelbe tenni

console.log(typeof aString) // string a típusa

console.log(typeof anUndefined) // undefined a típusa

console.log(typeof aNull) // object a típusa

console.log(typeof notANumber) // number a típusa

console.log(aFunction1()); // előtte is működik

function aFunction1() {
    // ez a függvény belseje
    // a függvény mindenképpen return-öl ha lefuttatjuk, ha nem adunk meg return-t, akkor undefined-ot
    return "this is a function"
}

console.log(aFunction1()); // utána is működik

const aFunction2 = function() {
    // ez is egy függvény, majdnem ugyanúgy viselkedik, mintha a függvénynek neve lenn
    return "this is another function"
}
aFunction2()

console.log(aFunction2()); // minden változóba mentett dolgunkhoz csak akkor férünk hozzá, amik utána jönnek


if(true) {
    // ide jön ha teljesül a feltételünk
}else{
    // ide pedig ha nem teljesül a feltétel
}

console.log("0" == 0);
console.log("0" === 0); // === az összehasonlítás, = a zárójelen belül nem jó, minimum 2 kellene, de az nem mindig jó, emiatt 3 db kell

// tömb v. felsorolás [] - ciklussal lehet végigmenni
const arr = [34, 15, 88, 2] // ez egy tömb

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}
for (const item of arr) {
    console.log(item)
}
// ezek ugyanazt csinálják, a cikluson belül, ugyanúgy lehet if-elni

class SmallestIntegerFinder {
    findSmallestInt(args) {
        // valamilyen módon elmenteni az első számot
        // let firstNumber = args[0]
        let smallestNumber = args[0];
        // összehasonlítani a következő számokkal - for loop
        for(let i = 0; i < args.length; i++) {
            // let i=0, az első elemmel kezdünk, i < argh.length, hogy a teljes számsorig menjen végig, i++ az i-t rögtön követő szám, igazából i+1-et jelent
            let currentNumber = args[i];
            // ha currentNumber kisebb, akkor felülírhatjuk a smallestNumber értékét
            if(currentNumber < smallestNumber) {
                smallestNumber = currentNumber
            }
        }
        return smallestNumber
    }
}

// egyszerűbb

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

/*Beforebegin elementen kívül és előtt
Afterbegin elementen belül de a kezdőtag után
Beforeend elementen belül de a végső tag előtt
Afterend elementen kívül és utána*/
