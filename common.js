const links = document.querySelector("#links")
const home = document.createElement("a");
const body = document.querySelector("body");
const script = document.querySelector("script");
let array = [];
links.appendChild(home);
home.textContent = "Home";
home.setAttribute("href", "../index.html")

const numbers = document.createElement("div");
numbers.setAttribute("id", "numbers")
body.insertBefore(numbers, script);
const text = document.createElement("p");
text.textContent = "How many numbers in the grid?"
numbers.appendChild(text);
let input = document.createElement("input");
numbers.appendChild(input);
const button = document.createElement("button");
numbers.appendChild(button);
button.textContent = "Create"

function randomNumber() {
    number = Math.ceil(99 * Math.random());
    return number;
}

input.value = "95"
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
startGrid();

button.addEventListener("click", function () {
    const inputValue = input.value;
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
