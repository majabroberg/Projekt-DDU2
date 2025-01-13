const divClear = createDivBox("divBox");
const fillCleared = buttonCreate(divClear, "Fill cleared");

function eventListeners() {
    let elements = document.querySelectorAll(".cell");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", function () {
            if (elements[i].clicked) {
                elements[i].style.backgroundColor = "orange";
            } else {
                elements[i].style.backgroundColor = "lightblue";
            }
        });

        elements[i].addEventListener("mouseout", function () {
            if (elements[i].clicked) {
                elements[i].style.backgroundColor = "red";
            } else {
                elements[i].style.backgroundColor = "";
            }
        });

        elements[i].addEventListener("click", function () {
            if (elements[i].clicked) {
                elements[i].style.backgroundColor = "";
                elements[i].textContent = array[i];
                elements[i].clicked = false;
            } else {
                elements[i].style.backgroundColor = "orange";
                elements[i].textContent = "";
                elements[i].clicked = true;
            }
        });
    }
}

eventListeners();

fillCleared.addEventListener("click", function () {
    let elements = document.querySelectorAll(".cell");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
        elements[i].textContent = array[i];
        elements[i].clicked = false;
    }
});

createButton.addEventListener("click", function () {
    eventListeners();
});