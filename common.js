const links = document.querySelector("#links")
const home = document.createElement("a");
const body = document.querySelector("body");
const script = document.querySelector("script");
let array = [];
links.appendChild(home);
home.textContent = "Home";
home.setAttribute("href", "../index.html")

const divNumbersGrid = document.createElement("div");
divNumbersGrid.setAttribute("id", "numbers")
body.insertBefore(divNumbersGrid, script);
const question = document.createElement("div");
question.textContent = "How many numbers in the grid?"
divNumbersGrid.appendChild(question);
let input = document.createElement("input");
input.value = "95"
divNumbersGrid.appendChild(input);
const createButton = buttonCreate(numbers, "Create");

function randomNumber() {
    return Math.ceil(99 * Math.random());
}

function startGrid() {
    let grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    body.insertBefore(grid, script);
    for (let i = 0; i < 95; i++) {
        let cell = document.createElement("div");
        let numbers = randomNumber();
        grid.appendChild(cell);
        cell.textContent = numbers;
        cell.setAttribute("class", `cell ${"_" + numbers}`);
        array.push(numbers);
    }
}

function clearHighlights() {
    let elements = document.querySelectorAll(".cell");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.backgroundColor === "lightgreen") {
            elements[i].style.backgroundColor = "";
        }
    }
}

function createDivBox(className) {
    const divBox = document.createElement("div");
    body.insertBefore(divBox, grid);
    divBox.setAttribute("class", className);
    return divBox;
}

function buttonCreate(parent, text) {
    const button = document.createElement("button");
    button.textContent = text;
    parent.appendChild(button);
    return button;
}

startGrid();

createButton.addEventListener("click", function () {
    let inputValue = input.value;
    let grid = document.getElementById("grid");
    array = [];

    if (grid) {
        grid.innerHTML = '';
    }
    else {
        let grid = document.createElement("div");
        body.insertBefore(grid, script);
        grid.setAttribute("id", "grid");
    }

    for (let i = 0; i < inputValue; i++) {
        let cell = document.createElement("div");
        let numbers = randomNumber();
        grid.appendChild(cell);
        cell.setAttribute("class", `cell ${"_" + numbers}`);
        cell.textContent = numbers;
        array.push(numbers);
    }
})
