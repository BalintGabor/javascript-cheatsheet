let results = {
    "Java" : 10,
    "Ruby" : 80,
    "Python" : 65
}

// ezekkel a szűrésekkel eljutottam, addig, hogy csak a kulcsok jelenjenek meg az értékek nem
const language = Object.keys(results)
console.log(language);
console.log(Object.keys(results).sort().reverse())

// I. legközelebb talán ezzel jártam, de itt meg csak a kulcsokat nem tudtam megjeleníteni, mert szétszedte tömbökbe
const resultsArr = Object.entries(results);
const filteredArr = resultsArr.filter(function ([key, value]) {
  return value >= 60;});
console.log(filteredArr);
/* I/1. befejezés a fenti kódnak (erre csak számokat ad ki):
const final = Object.keys(filteredArr) */

/* I/2. befejezés a fenti kódnak (nem változik ezt követően):
    const final = filteredArr.filter(function([key, value]){
    return key;
})*/


// II. próbáltam ezt is, a neten találva
const atLeast60 = _.flow([
    Object.entries,
    arr => arr.filter(([key, value]) => value >= 60),
    Object.fromEntries
  ])(results);
atLeast60;

// III. próbálkozás
function isGreater(value) { 
    return (value >= 60); 
}
let testElemets = Object.keys(results).filter(isGreater); 
console.log(testElemets);

// IV. próbálkozás
console.log(Object.keys(results).sort().reverse())
const sorted = Object.keys(results).sort().reverse()
const filtered01 = results.filter(checkRes)
function checkRes(sorted) {
    return sorted > 60;
}

// V. próbálkozás
for (const property in results) {
  console.log(`${property}`);}

// VI. próbálkozás
let over60 = [];
for (let i = 0; i < results.length; i++) {
    if (results[i].value > 60) {
        over60.push(results[i]);
    }
}
console.log(over60);

// VII. próbálkozás
const resultsArr01 = Object.entries(results);
const filteredArr01 = resultsArr.filter(function ([key, value]) {
    return value >= 60;});
const filtered = filteredArr.filter(function ([key,value]) {
    return key
})