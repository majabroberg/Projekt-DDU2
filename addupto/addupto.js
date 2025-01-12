const div = document.createElement("div");
body.insertBefore(div, grid);
div.setAttribute("class", "divBox")
const clickNumber = document.createElement("div");
div.appendChild(clickNumber);
clickNumber.textContent = "Add up to:";
let total = document.createElement("input");
total.value = "179"
div.appendChild(total);
const addUpp = document.createElement("button");
div.appendChild(addUpp);
addUpp.textContent = "Find two cells that Add Up";

let totalValue = total.value;

addUpp.addEventListener("click", function () {
    let totalValue = parseInt(total.value);
    let elements = document.querySelectorAll(".cell");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.backgroundColor === "lightgreen") {
            elements[i].style.backgroundColor = "";
        }
    }

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