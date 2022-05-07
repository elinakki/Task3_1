/* Created a button that prints out "Klikkasit buttonia" when pressed */

let button = document.querySelector("#clickme");
button.onclick = clickButton;

function clickButton() {
    console.log("Klikkasit buttonia");
}

/* Created a textbox that changes color */

let boxArea = document.getElementById("boxarea");

boxArea.addEventListener("click", doSome);

function doSome(event) {
    event.currentTarget.classList.add("change");
}

/* Manipulated h1 styles */

let h1 = document.querySelector("h1");

h1.classList.add("special");
h1.style.fontFamily = "Verdana";

/* Added new p element and function for it to change fontcolor when mouse is brought over the text */

let p = document.getElementById("p2");

p.addEventListener("mouseover", changeStyle);
p.addEventListener("mouseleave", changeStyle);

function changeStyle () {
    p.classList.toggle("textstyle");
}

/* REST */

fetch ('https://yesno.wtf/api/')
.then(response => response.json())
.then(
    data => {
        document.getElementById('print-here').innerHTML = "<h2>" + data.answer + "</h2>";
        document.getElementById('print-here').innerHTML += '<img src="' + data.image + '"/>';
    }
);