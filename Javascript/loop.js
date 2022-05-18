let str = "My name is Doe, true or false?, 50 years old."
const arr = str.split(" ");
function numberbool(x) {
    return typeof x == number || typeof x == Boolean 
}
let newArr = arr.filter(numberbool);