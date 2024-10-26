function calculate(operation) {
    let num1 = parseFloat(document.getElementById("numeroUno").value || 0);
    let num2 = parseFloat(document.getElementById("numeroDos").value || 0);
    let resultado = document.getElementById("result");

    switch (operation) {
        case "sum":
            resultado.textContent = num1 + num2;
            break;
        case "res":
            resultado.textContent = num1 - num2;
            break; 
        case "mul":
            resultado.textContent = num1 * num2;
            break;
        case "div":
            resultado.textContent = num1 / num2;
            break;
    }
}

