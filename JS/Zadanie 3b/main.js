let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const liElements = document.createElement("ul");
    btn.textContent = "Dodaj 10 elementów listy";
    document.body.appendChild(btn);
    document.body.appendChild(liElements);

    btn.addEventListener("click", createLiElements);
}


const createLiElements = () => {

    const liElements = document.querySelector("ul");


    for (let i = 0; i < 10; i++) {
        let liElement = document.createElement("li");
        liElement.style.fontSize = size + "px";
        // let number = orderElement + i;
        // liElement.textContent = 'Element nr ' + number;
        liElement.textContent = `Element nr ${orderElement++}`;
        liElements.appendChild(liElement);
        size++;

    }



    orderElement += 10;

}

init()