function clickButton() {
    console.log("Klikkasit buttonia");
}

let boxArea = document.getElementById("boxarea");

boxArea.addEventListener("click", doSome)

function doSome (event) {
    event.target.classList.add("change");
}