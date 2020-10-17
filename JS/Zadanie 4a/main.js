// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony


const body = document.querySelector("body");

let cordinates = document.createElement("h1");
body.appendChild(cordinates);


const colors = function (e) {
    x = e.clientX;
    y = e.clientY;

    cordinates.style.fontSize = 100 + "px";
    cordinates.style.textAlign = "center";
    cordinates.textContent = x + ", " + y;

    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.backgroundColor = "red";
    } else if (x % 2 != 0 && y % 2 != 0) {
        document.body.style.backgroundColor = "blue";

    } else {
        document.body.style.backgroundColor = "green";
    }


}



document.body.addEventListener("click", colors);