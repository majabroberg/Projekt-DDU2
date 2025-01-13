const divAddUp = createDivBox("divBox");
body.insertBefore(divAddUp, grid);
const clickNumber = document.createElement("div");
divAddUp.appendChild(clickNumber);
clickNumber.textContent = "Add up to:";
let total = document.createElement("input");
total.value = "179"
divAddUp.appendChild(total);
const addUpp = buttonCreate(divAddUp, "Find two cells that Add Up")

let totalValue = total.value;

addUpp.addEventListener("click", function () {
    let totalValue = parseInt(total.value);
    let elements = document.querySelectorAll(".cell");

    clearHighlights();

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == totalValue) {
                elements[i].style.backgroundColor = "lightgreen";
                elements[j].style.backgroundColor = "lightgreen";
                return;
            }
        }
    }
});