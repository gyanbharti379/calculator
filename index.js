const display = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.classList.contains("number")) {
            display.value += e.target.innerText;
        }
        if (e.target.classList.contains("operator")) {
            display.value += e.target.innerText;
        }
        if (e.target.classList.contains("equalBtn")) {
            display.value = eval(display.value);  
        }
        if (e.target.classList.contains("ac")) { 
            display.value = "";
        }
        if (e.target.classList.contains("del")) {
           display.value = "";
           
        }
    });
});
