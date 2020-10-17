const btnAdd = document.querySelector('.add')
const btnClean = document.querySelector('.clean')
const btnShowAdvice = document.querySelector('.showAdvice')
const btnShowOptions = document.querySelector('.showOptions')
const h1 = document.querySelector('h1')

const advices = ["walcz", "przemyś to jeszcze raz"];

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const newAdvice = input.value;
    if(input.value.length) {
        for (advice of advices) {
            if (advice === newAdvice) {
                alert("Taka wartość już występuje!");
                console.log(newAdvice);
            }
        }
        advices.push(newAdvice);
        console.log(newAdvice);
        input.value = "";
    }

}

const cleanAdvices =  (e) => {
    e.preventDefault();
    // while (advices.length) {
    //     advices.pop();
    //   }

    advices.length = 0;

}

const showAdvices = (e) => {
    e.preventDefault();
    const indexAdvice = Math.floor(Math.random() * advices.length);
    h1.textContent = `${advices[indexAdvice]}`
}


const showOptions = (e) => {
    // alert(advices);
    alert(advices.join(" --- --- "))
}


btnAdd.addEventListener("click", addAdvice);
btnClean.addEventListener("click", cleanAdvices);
btnShowAdvice.addEventListener("click", showAdvices);
btnShowOptions.addEventListener("click",showOptions);