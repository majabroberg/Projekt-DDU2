const div = document.createElement("div");
body.insertBefore(div, grid);
div.setAttribute("class", "divBox")
const clickNumber = document.createElement("div");
div.appendChild(clickNumber);
clickNumber.textContent = "Click on a number to find copies";
const reset = document.createElement("button");
div.appendChild(reset);
reset.textContent = "Reset";

let clickedNumber;

function highlightSame() {
    let sameNumbers = document.querySelectorAll(`.${"_" + clickedNumber}`);
    for (let i = 0; i < sameNumbers.length; i++) {
        sameNumbers[i].style.backgroundColor = "lightgreen";
        clickNumber.textContent = `${sameNumbers.length} copies of the number ${clickedNumber}`;
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

function clicked() {
    let elements = document.querySelectorAll(".cell");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            clearHighlights();
            elements[i].style.backgroundColor = "lightgreen";
            clickedNumber = parseInt(elements[i].textContent);
            highlightSame();
        });
    }
}

clicked();

reset.addEventListener("click", function () {
    clickNumber.textContent = " Click on a number to find copies ";
    let elements = document.querySelectorAll(".cell");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.backgroundColor === "lightgreen") {
            elements[i].style.backgroundColor = "";
        }
    }
    markedSum = 0;
});

create.addEventListener("click", function () {
    clicked();
});


