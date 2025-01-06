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

newRandom.addEventListener("click", function () {
    numberBox.textContent = randomNumber();
})