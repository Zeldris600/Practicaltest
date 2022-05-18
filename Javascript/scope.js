a = 'Javascript'//declaring a variable without let or const make it available in window object and this found anywhere
b = 10//this is a global scope variable and found in the window object
function letsLearnScope() {
    console.log(a,b)
    if (true) { console.log(a,b)
    }
}
//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible