document.body.style.height = "10000px";

const line = document.createElement('div');
document.body.appendChild(line);

let grow = true; //flaga

let size = 50; //wielkość kwadratu
line.style.position = 'fixed';
line.style.left = '0px';
line.style.top = 0;
line.style.width = '100%';
line.style.height = size + "px";
line.style.background = "green";

const changeHeight = function () {


    if (size >= window.innerHeight / 2) {
        grow = !grow;
        line.style.background = "red";
    } else if (size <= 0) {
        grow = !grow;
        line.style.background = "green";
    }

    if (grow) {

        size += 5

    } else {

        size -= 5

    }
    line.style.height = size + "px";


}

window.addEventListener("scroll", changeHeight);