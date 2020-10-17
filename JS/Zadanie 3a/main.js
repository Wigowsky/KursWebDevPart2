// tutaj rozwiązanie

const btn = document.querySelector("button");


const liItems = [...document.getElementsByTagName("li")];

let size = 10;


const addHeight = function () {

    // for (let i = 0; i < liItems.length; i++) {
    //     liItems[i].style.display = "block";
    //     liItems[i].style.fontSize = size + "px"

    // }

    liItems.forEach(item => {

        item.style.display = "block";
        item.style.fontSize = size + "px"

    });

    size += 1;

}

btn.addEventListener("click", addHeight);