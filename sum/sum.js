const divSum1 = document.createElement("div");
body.insertBefore(divSum1, grid);
divSum1.setAttribute("class", "divBox")
const sumAll = document.createElement("div");
divSum1.appendChild(sumAll);
sumAll.textContent = "Sum of all:"
const numberBox = document.createElement("div");
divSum1.appendChild(numberBox);
numberBox.setAttribute("class", "square");
numberBox.textContent = "-";
numberBox.style.width = "50px";

const divSum2 = document.createElement("div");
body.insertBefore(divSum2, grid);
divSum2.setAttribute("class", "divBox")
const sumOfMarked = document.createElement("div");
divSum2.appendChild(sumOfMarked);
sumOfMarked.textContent = "Sum of marked:"
const markedBox = document.createElement("div");
divSum2.appendChild(markedBox);
markedBox.setAttribute("class", "square");
markedBox.textContent = "-";
const reset = document.createElement("button");
divSum2.appendChild(reset);
reset.textContent = "Reset";

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

create.addEventListener("click", function () {
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