const div = document.createElement("div");
body.insertBefore(div, grid);
div.setAttribute("class", "divBox")
const fillCleared = document.createElement("button");
div.appendChild(fillCleared);
fillCleared.textContent = "Fill cleared";

function hover() {
    let elements = document.querySelectorAll(".cell");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", function () {
            if (elements[i].style.backgroundColor !== "red") {
                elements[i].style.backgroundColor = "lightblue";
            }
        });
        elements[i].addEventListener("mouseleave", function () {
            if (elements[i].style.backgroundColor !== "red") {
                elements[i].style.backgroundColor = "lightgrey";
            }
        });
        elements[i].addEventListener("click", function () {
            elements[i].style.backgroundColor = "red";
            elements[i].textContent = "  ";
        });

    }
}



hover();

create.addEventListener("click", function () {
    hover()
});

fillCleared.addEventListener("click", function () {
    let elements = document.querySelectorAll(".cell");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.backgroundColor === "red") {
            elements[i].style.backgroundColor = "lightgrey";
        }
    }
});