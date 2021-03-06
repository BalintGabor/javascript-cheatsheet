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

let protagonist = {
    "actorName": "Noomi Rapace", // nem lenne szükséges az actorName-t idézőjelbe tenni (csak a .js kiterjesztéseknél, ha .jason akkor viszont igen) az a kulcsérték a : után pedig az érték következik
    "characterName": "Elizabeth Shaw"
}

// console.log(az adott elérési útvonal.length) - kiírja az összes érték számát
// console.log(typeof az adott elérési útvonal.length) - kiírja, hogy számról van-e szó, ha number
// for (let index = 0; index < elérési útvonal.length; index++) {console.log(elérési útvonal[index].name)} - kilistázza az összeset
// for (const vmi of elérési útvonala a tömbnek) {console.log (vmi.name)} - ugyanaz mint feljebb
// for (const vmiIndex in elérési útvonal) {console.log(elérési útvonal[vmiIndex].name)}

let queue = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]

console.log(queue.indexOf("wolf"))
console.log(queue.length -1)
function warnTheSheep(queue) {
    let w = queue.indexOf("wolf");
    let q = queue.length -1;
    let n = q - w
    if (q === w) {
        return "Pls go away and stop eating my sheep"
    } else {
        return ("Oi! Sheep number " + n +"! You are about to be eaten by a wolf!")
    }
}
console.log(warnTheSheep(queue));


//Nth Smallest Element
let arr01 = [-5,-1,-6,-18]
let pos = 4
function nthSmallest(arr01, pos){
    const sol = arr.sort((a, b) => a - b)
      return(sol[pos - 1])
  }

// My head is at the wrong end!
console.log(arr.reverse(arr))

// return Object.entries(results) - My Languages
//   Filterezzünk értékek alapján
    .filter(([key, value]) => value >= 60)
//   Sortoljuk csökkenő sorrendben értékek alapján
    .sort((a, b) => b[1] - a[1])
//   Kiszedjük a kulcsokat
    .map(([key, value]) => key);

// Change two-dimensional array
function matrix(array) {
    for (let index = 0; index < array.length; index++) {
        const n = index;
        if (array[n][n] < 0) {
            array[n].splice(n, 1, 0)}
            else {array[n].splice(n, 1, 1)};
    }
    return (array)
}

//count true-s in an array
function countSheeps(arrayOfSheep) {
    let sum = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i]===true) {
        sum += 1;
      }
    }
    return sum  
  }
// egyszerűbb verzió:
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  } //boolean = true

// Feladat n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
function isDivisible(n, x, y) {
    if (n % x != 0) {
      return false;
    } else if (n % y != 0) {
        return false;
    } else {
        return true;
    }
  }
// century
function century(year) {
    return (year + 99) / 100 | 0; //levágja a tizedeket
  }

// monogram
function abbrevName(name){

    var nameArray = name.split(" "); // szétszedi két stringgé, namearray0 ás namearray1-é
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

  // 348597 => [7,9,5,8,4,3]

  function digitize(n) {
    var arr = String(n).split("").reverse().map(Number);
    return arr
  }

// find the word 'neede' in an array
function findNeedle(array) {
    for (var i=0; i<array.length; i++){
      if (array[i] === 'needle')
        return 'found the needle at position ' + i;
    }
}

//[1, 2, 3] --> [2, 4, 6]
function maps(x){
    return x.map(n => n * 2);
  }

//[1,-2,3,-4,5] -> [-1,2,-3,4,-5]); [0] ->[-0]
function invert(array) {
    return array.map(n => -n);
}

// hello world! -> world! hello
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }

//[101, 45, 75, 105, 99, 107], 107), true); ['what', 'a', 'great', 'kata'], 'kat'), false);
function check(a, x) {
    if (a.includes(x)) {
      return true;
      } else {
        return false
      }
}

// array-ek összevonása
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys); //= Cecilie,Lone,Emil,Tobias,Linus