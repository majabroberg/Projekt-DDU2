const divRemove = document.createElement("div");
body.insertBefore(divRemove, grid);

divRemove.setAttribute("id", "divRemove")
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
removeBox.style.width = "150px";
let removeNumber;

function highlightDivs() {
    let elements = document.querySelectorAll(`.${"_" + removeNumber}`);
    if (elements.length == 0) {
        removeBox.textContent = "Nothing to remove";
    }
    else {
        elements.forEach(element => {
            element.style.backgroundColor = "red";
            element.textContent = "X"
            removeBox.textContent = `${removeNumber}` + " removed " + elements.length + " times";
        });
    };
}

newRandom.addEventListener("click", function () {
    removeBox.textContent = " - ";
    let allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => {
        if (cell.style.backgroundColor === "orange") {
            cell.style.backgroundColor = "";
        }
    });

    removeNumber = randomNumber();
    numberBox.textContent = removeNumber;

    let elements = document.querySelectorAll(`.${"_" + removeNumber}`);
    elements.forEach(element => {
        element.style.backgroundColor = "orange";
    });
});

remove.addEventListener("click", function () {
    highlightDivs();
});
