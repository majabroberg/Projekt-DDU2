const links = document.querySelector("#links")
const home = document.createElement("a");
const body = document.querySelector("body");
const script = document.querySelector("script");
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
    number = Math.ceil(100 * Math.random());
    return number;
}





