let name = "Lukman";
let surname = "Ibrahim";
let age = 50;
let isStudent = true;
let favColor = "Blue"




function displayInformation () {
    let info = document.getElementById("info");
    let output = `
        My name is ${name} ${surname}<br> I am ${age} years old. <br> Am I a student? ${isStudent} <br> My favorite color is ${favColor}. 
    `;
    info.innerHTML = output;
    document.getElementById("new-age").innerHTML = "";
    
}

document.getElementById("btn-info").onclick = function() {
    displayInformation();
    
    let information = document.getElementById("information")
    information.style.backgroundColor = "blue"
    information.style.padding = @
}


let nextAge = age + 5;

function displayAge () {
    let output = `
        I will be ${nextAge} in five years.
    `
    document.getElementById("new-age").innerHTML = output;
    document.getElementById("info").innerHTML = "";
}

document.getElementById("btn-age").onclick = function() {
    displayAge();
}
