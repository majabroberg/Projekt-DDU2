const divSum1 = document.createElement("div");
body.insertBefore(divSum1, grid);
divSum1.setAttribute("class", "divSum")
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
divSum2.setAttribute("class", "divSum")
const sumMarked = document.createElement("div");
divSum2.appendChild(sumMarked);
sumMarked.textContent = "Sum of marked:"
const markedBox = document.createElement("div");
divSum2.appendChild(markedBox);
markedBox.setAttribute("class", "square");
markedBox.textContent = "-";
markedBox.style.width = "150px";
const reset = document.createElement("button");
divSum2.appendChild(reset);
reset.textContent = "Reset"

function sumOfAll() {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    numberBox.textContent = sum;
}

sumOfAll();

button.addEventListener("click", function () {
    sumOfAll();
});
