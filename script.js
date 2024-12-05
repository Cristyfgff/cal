const input = document.getElementById("input");
const buttons = document.querySelectorAll(".btn");
const deletebtn = document.getElementById("dltbtn");
const antiDbl = /([./%*+\-])\1+/g;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        input.value += button.textContent;
        input.value = input.value.replace(antiDbl, "$1")
    });
});

deletebtn.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
})

const resetInput = () => {
    input.value = "";
}

const calculateResult = () => {
    try {
        input.value = eval(input.value);
    } catch (error) {
        alert('Invalid Expression');
        resetInput();
    }
}