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
            if (elements[i].style.backgroundColor !== "red" && elements[i].style.backgroundColor !== "orange") {
                elements[i].style.backgroundColor = "lightblue";
            }
            else if (elements[i].style.backgroundColor === "red") {
                elements[i].style.backgroundColor = "orange";
            }
        });
        elements[i].addEventListener("mouseleave", function () {
            if (elements[i].style.backgroundColor !== "red") {
                elements[i].style.backgroundColor = "lightgrey";
            }
        });
        elements[i].addEventListener("click", function () {
            if (elements[i].style.backgroundColor !== "red" && elements[i].style.backgroundColor !== "orange") {
                elements[i].style.backgroundColor = "orange";
                elements[i].textContent = "  ";
                elements[i].addEventListener("mouseleave", function () {
                    elements[i].style.backgroundColor = "red";
                    elements[i].textContent = "  ";
                });
            }
            else if (elements[i].style.backgroundColor === "orange") {
                elements[i].textContent = array[i];
                elements[i].style.backgroundColor = "lightblue";
                elements[i].addEventListener("mouseleave", function () {
                    elements[i].style.backgroundColor = "lightgrey";
                    elements[i].textContent = array[i];
                });
            }
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
            elements[i].style.backgroundColor = "";
            elements[i].textContent = array[i];
        }
    }
    hover();
});
