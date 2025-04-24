// Dichiarare una funzione senza parametri e senza ritorno
// function sayHello() {
//   console.log("Hello World!")
// }

// Invocare una funzione senza parametri e senza ritorno
// sayHello() // Ricordarsi delle parentesi tonde!
// sayHello()

// Dichiarare una funzione con un parametro e senza ritorno
// function greetUser(username) {
//   console.log("Hello " + username + " !!!")
// }

// Invocare una funzione con un parametro e senza ritorno
// greetUser("Alice")
// greetUser("Bob")
// greetUser("Carl")
// greetUser() // Se non passo niente username sarà undefined!!

// Dichiarare una funzione con due parametri e ritorno di un valore
// function calculateTotal(price, quantity) {
//   const total = price * quantity
//   return total
// }

// Invocare una funzione con due parametri e ritorno di un valore
// console.log("Il totale è: " + calculateTotal(20.0, 10))
// const total = calculateTotal(20.0, 10)
// console.log("Il totale è: " + total)
// const total2 = calculateTotal(30.0, 5)
// console.log("Il totale 2 è: " + total2)

// Funzioni con logica al loro interno
// function getWelcomeMessage(name, isPremium) {
//   let message = "Welcome, " + name

//   if (isPremium) message = message + ". Thank you for being a premium member!"
//   else message = message + ". Upgrade to premium to get more!"

//   return message
// }

// const msg = getWelcomeMessage("Alice", true)
// console.log(msg)
// const msg2 = getWelcomeMessage("Bob", false)
// console.log(msg2)

// Parametri di default
// function multiply(a = 1, b = 1) {
//   return a * b
// }

// console.log(multiply(5))
// console.log(multiply())

// Rest Parameters (numero variabile di parametri)
// function sumAll(...numbers) {
//   let total = 0
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index]
//     total = total + element
//   }

//   return total
// }

// console.log(sumAll(1, 2, 3, 4, 5, 6, 7))
// console.log(sumAll(1, 2, 3))

// ************************* ARROW FUNCTIONS ************************
// const square = num => num * num
// function traditionalSquare(num) {
//   return num * num
// }

// const result = square(6)
// console.log(result)

// const getFullName = (firstName, lastName) => firstName + ", " + lastName
// console.log(getFullName("Frodo", "Baggins"))

// ******************************* HOISTING & SCOPE ******************************
// HOISTING

hello() // Non è proprio logico invocare qualcosa che non si è ancora creato. Con le funzioni "tradizionali" però si può fare ed in alcuni casi particolari può tornare comodo

function hello() {
  console.log("Hoisted!")
}

// helloNonHoisted(). Se le funzioni le dichiaro con la sintassi let/const (a prescindere se esse siano arrow o no), hoisting non avviene quindi non posso invocarle prima della loro definizione

const helloNonHoisted = function () {
  console.log("Not hoisted!")
}

// SCOPE

const globalVar = "I am global!"

function testScope() {
  const localVar = "I am local!"
  console.log(globalVar)
  console.log(localVar)
}

// console.log(localVar) <-- localVar is not defined (perché ha scope locale, cioè visibile solo all'interno della funzione)
testScope()

function testVar() {
  if (true) {
    var test = "Hello!"
  }
  console.log(test) // Non è molto "logico" accedere ad una variabile al di fuori del blocco dove è definita. Questo potrebbe causare anche dei problemi di sovrascritture indesiderate magari. Meglio quindi usare (di nuovo) LET O CONST!
}

testVar()

function testConst() {
  if (true) {
    const test = "Hello!"
  }
  // console.log(test) // <-- test is not defined. Perché const ha BLOCK-SCOPE quindi sarà visibile solo all'interno dell'if
}

testConst()

// ********************************* METHODS ******************************

const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello " + this.name) // Le funzioni tradizionali se usate come metodi ci consentono di usare correttamente il this per riferirci all'oggetto in question
  },
}

person.greet()

const person2 = {
  name: "Bob",
  greet: () => {
    console.log("Hello " + this.name) // "Ottiene" il valore di this dal contesto esterno, in questo caso il contesto è l'oggetto globale WINDOW perchè stiamo eseguendo il codice nel browser
  },
}

person2.greet()

// ********************************* STRING METHODS ******************************
const text = " Hello World! "
const trimmedText = text.trim()
console.log(text.trim())
console.log(text.toUpperCase())
console.log(text.trim().toUpperCase())
console.log(text.includes("World"))
console.log(text.replace("World", "Everybody"))
console.log(text.trim().split(" ").join("----"))

// ********************************* MATH METHODS ******************************
console.log(Math.sqrt(121))
