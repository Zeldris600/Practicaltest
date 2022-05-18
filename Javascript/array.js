 
       const key1 = "savedfruits";
       let oldFruits = localStorage.getItem(key1)   
           
       const fruits = oldFruits?JSON.parse(oldFruits):["🍌", "🍍","🍎","🍊","🍓"];
       let input,p;
       
       function initUi() {
                   p = document.getElementById("fruitoutput")//container2 or output of array
                   input = document.getElementById("inputfruits")
                   p.innerHTML = fruits.join(" <br> ");//writes or displays array in paragraph
       }

       function refresh() {
           p.innerHTML = ""
           let newFruit = ""
           newFruit = fruits.join(" <br> ")
           p.innerHTML = newFruit
           saveFruits()
            }
        function saveFruits() {
            let str = ""
            str = JSON.stringify(fruits)
            localStorage.setItem(key1,str)
        }
        function loadFriuts() {
            let saved = localStorage.getItem("obtainFruits", )
            let myFruit = fruits
        }
       function popFruits () {
           fruits.pop();
            refresh(); 
           /*  window.alert("Removes last element of array") */
       }
       function shiftFruits () { 
           fruits.shift();
           refresh()
            /* window.alert("Removes first element from array"); */
       }
       function pushFruits () { 
           fruits.push(input.value);
             refresh(); 
            /* let i = document.getElementById("inputfruits").value; */
            /* window.alert("Add new element at the end of your array");  */
       }
       function unshiftFruits () { 
           fruits.unshift(input.value);
            refresh(); 
            /* window.alert("This Javascript array method add's specified element at the begining of your array"); */
       }
       function clear() {
           input.value = 0
       }
       
        

