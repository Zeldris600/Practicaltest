let inputName,inputAge,inputDisease,regButton,output;
let patientList = localStorage.getItem("patientInfo");
let displayList = [];
let patient = {
    name: "",
    age: null,
    disease: ""
}
function initUI() {
    inputName = document.getElementById("name");
    inputAge = document.getElementById("age");
    inputDisease = document.getElementById("disease");
    regButton = document.getElementById("btn");
    output = document.getElementById("table");
    
    
}
function createNewPatient(){
    patient.name = inputName.value
    patient.age = inputAge.value
    patient.disease = inputDisease.value
}
function addPatient(){
    displayList.push(patient)
    
}

function storePatient() {
    let list = JSON.stringify(displayList)
    localStorage.setItem("patientInfo",list)
     patient = {
        name: "",
        age: null,
        disease: ""
    }
    
}
function showTable() {
    output.innerHTML = printPatient()
}

function printPatient() {
    let str = "";
    let row = displayList.map(function (pt) {
        let row2 = `<tr><td>${pt.name}</td><td>${pt.age}</td><td>${pt.disease}</td></tr>`;
        return row2;
    })
    str = row.join("\n")
    return str;
}

