let input1;
let div;

function init() {//initialize UI
    input1 = document.getElementById("insert") 
    div = document.getElementById("div")
}
function testInput() {//test input
    div.innerHTML = input1.value
    
}

function divtest() {
    window.alert(div)
}