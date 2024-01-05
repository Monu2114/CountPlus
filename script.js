let number = document.querySelector('.number');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

plus.addEventListener("click", () => modifyNumber(1));
minus.addEventListener("click", () => modifyNumber(-1));

document.addEventListener("keydown", (event) => {
    if (event.key ==="=" || event.key=="+" || event.code === "ArrowUp") {
        modifyNumber(1);
    } else if (event.key === "-" || event.code === "ArrowDown") {
        modifyNumber(-1);
    }
});
function modifyNumber(amount) {
    // Assuming the content of the number element is a string representation of a number
    let current = parseInt(number.textContent, 10);
    number.textContent = current + amount;
    console.log(number.textContent);
}

