const divSame = createDivBox("divBox");
const clickNumber = document.createElement("div");
divSame.appendChild(clickNumber);
clickNumber.textContent = "Click on a number to find copies";
const reset = buttonCreate(divSame, "Reset");
let clickedNumber;

function highlightSame() {
    let sameNumbers = document.querySelectorAll(`.${"_" + clickedNumber}`);
    for (let i = 0; i < sameNumbers.length; i++) {
        if (sameNumbers.length === 1) {
            sameNumbers[i].style.backgroundColor = "lightgreen";
            clickNumber.textContent = `${sameNumbers.length} copy of the number ${clickedNumber}`;
        } else {
            sameNumbers[i].style.backgroundColor = "lightgreen";
            clickNumber.textContent = `${sameNumbers.length} copies of the number ${clickedNumber}`;
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
    clearHighlights();
    markedSum = 0;
});

createButton.addEventListener("click", function () {
    clicked();
});