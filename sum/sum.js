const divSum1 = createDivBox("divBox");
const sumAll = document.createElement("div");
divSum1.appendChild(sumAll);
sumAll.textContent = "Sum of all:"
const numberBox = createDivBox("square");
divSum1.appendChild(numberBox);
numberBox.textContent = "-";
numberBox.style.width = "50px";

const divSum2 = createDivBox("divBox", "");
const sumOfMarked = document.createElement("div");
divSum2.appendChild(sumOfMarked);
sumOfMarked.textContent = "Sum of marked:";
const markedBox = createDivBox("square");
divSum2.appendChild(markedBox);
markedBox.textContent = "-";
const reset = buttonCreate(divSum2, "Reset");

let markedSum = 0;

function sumOfAll() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    numberBox.textContent = sum;
}

function sumMarked() {
    let elements = document.querySelectorAll(".cell");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            if (elements[i].style.backgroundColor === "lightgreen") {
                elements[i].style.backgroundColor = "";
                markedSum -= parseInt(elements[i].textContent);
            } else {
                elements[i].style.backgroundColor = "lightgreen";
                markedSum += parseInt(elements[i].textContent);
            }

            markedBox.textContent = markedSum;
            if (markedSum === 0) {
                markedBox.textContent = " - ";
            }
        });
    }
}

sumOfAll();
sumMarked();

createButton.addEventListener("click", function () {
    sumOfAll();
    markedBox.textContent = " - "
    markedSum = 0;
    sumMarked();
});

reset.addEventListener("click", function () {
    markedBox.textContent = " - ";
    clearHighlights();
    markedSum = 0;
});