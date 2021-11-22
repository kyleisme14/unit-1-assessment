let plus = document.querySelectorAll("button")[0]
let minus = document.querySelectorAll("button")[1]
let input = document.querySelector("input")
let h1Value = document.querySelector("h1").textContent
let h1 = document.querySelector("h1")
let valueInput = document.querySelector("input").value

function addition() {
    let valueInput = document.querySelector("input").value
   let sum = (parseInt(valueInput) + parseInt(h1Value));
   h1Value = sum;
   console.log(sum);
   h1.textContent = sum;
   if (parseInt(h1Value) < 0) {
    h1.style.color = "red"};
};

function subtraction() {
    let valueInput = document.querySelector("input").value
    let less = (parseInt(h1Value) - parseInt(valueInput));
    h1Value = less;
    console.log(less);
    h1.textContent = less;
    if (parseInt(h1Value) < 0) {
        h1.style.color = "red"};
};

plus.addEventListener("click", addition)
minus.addEventListener("click", subtraction)

