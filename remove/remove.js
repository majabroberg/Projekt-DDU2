const divRemove = document.createElement("div");
body.insertBefore(divRemove, grid);
divRemove.setAttribute("class", "divBox");

const newRandom = document.createElement("button");
divRemove.appendChild(newRandom);
const numberBox = document.createElement("div");
divRemove.appendChild(numberBox);
numberBox.setAttribute("class", "square");
numberBox.textContent = "-";
numberBox.style.width = "50px";
newRandom.textContent = "New random number"

const remove = document.createElement("button");
divRemove.appendChild(remove);
remove.textContent = "Remove"
const removeBox = document.createElement("div");
divRemove.appendChild(removeBox);
removeBox.setAttribute("class", "square");
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