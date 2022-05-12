const user1 = {
    id: 3242342,
    username: "belakovacs12",
    email: "bela@gmail.com",
    phone: "701231231",
    gender: "male",
    age: 18,
    isConfirmed: true
}
  
const user2 = {
    id: 2136523,
    username: "lajosnenagy",
    email: "lajosne@gmail.com",
    phone: "303214321",
    gender: "female",
    age: 18,
    isConfirmed: true
}
  
const user3 = {
    id: 8743534,
    username: "akarki99",
    email: "kazmer@gmail.com",
    phone: "206546547",
    gender: "male",
    age: 18,
    isConfirmed: false
}
  
const user4 = {
    id: 4733631,
    username: "akarkine99",
    email: "kazmerne@gmail.com",
    phone: "206546547",
    gender: "female",
    age: 20,
    isConfirmed: false
}
  
const user5 = {
    id: 4733632,
    username: "akarkine99",
    email: "ifjkazmerne@gmail.com",
    phone: "206546547",
    gender: "female",
    age: 17,
    isConfirmed: false
}

let users = {user1, user2, user3, user4, user5
}


// ennél a users-re not iterable hibát dob ki, holott lejjebb a usernél rendben feldobta a key változókat
let solution = []
for (const user of users) {
    if (user.gender === female && user.age >= 18) {
        solution.push(user)  
    }
}
console.log(solution)

// ennél megoldásnál helyesen kijöttek a végeredmények de backtick miatt nem fogadja el, csak az elsőt olvassa be, illetve ha nincs bevitt érték, hibára fut
/*for (let [key, value] of Object.entries(users)){
console.log(`${value.username}@${value.id}`);}
*/
/*const ids = Object.values(users.user1)
console.log(ids[1] + "@" + ids[0])*/