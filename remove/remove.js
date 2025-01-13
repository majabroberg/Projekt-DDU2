const divRemove = createDivBox("divBox");
const newRandom = buttonCreate(divRemove, "New random number");
const numberBox = createDivBox("square");
divRemove.appendChild(numberBox);
numberBox.textContent = "-";
numberBox.style.width = "50px";

const remove = buttonCreate(divRemove, "Remove");
const removeBox = createDivBox("square");
divRemove.appendChild(removeBox);
removeBox.textContent = "-";
let removeNumber;

function highlightCells() {
    let elements = document.querySelectorAll(`.${"_" + removeNumber}`);
    if (elements.length == 0) {
        removeBox.textContent = "Nothing to remove";
    }

    else if (elements.length == 1) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "red";
            elements[i].textContent = "X";
        }
        removeBox.textContent = `${removeNumber} removed ${elements.length} time`;
    }

    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "red";
            elements[i].textContent = "X";
        }
        removeBox.textContent = `${removeNumber} removed ${elements.length} times`;
    }
}

newRandom.addEventListener("click", function () {
    removeBox.textContent = " - ";
    let allCells = document.querySelectorAll('.cell');
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].style.backgroundColor === "orange") {
            allCells[i].style.backgroundColor = "";
        }
    }
    removeNumber = randomNumber();
    numberBox.textContent = removeNumber;

    let elements = document.querySelectorAll(`.${"_" + removeNumber}`);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "orange";
    }
});

remove.addEventListener("click", function () {
    highlightCells();
});