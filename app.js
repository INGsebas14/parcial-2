//funcjion que recibe un parametro depemde del usuqrio que botn oprime
function calculate(operation) {
    //agarramos el valor de los imput con id(numeroUno) y lo guardamos en una variable
    let num1 = parseFloat(document.getElementById("numeroUno").value || 0);
    let num2 = parseFloat(document.getElementById("numeroDos").value || 0);
    let resultado ;

    switch (operation) {
        case "sum":
            resultado = num1 + num2;
            break;
        case "res":
            resultado = num1 - num2;
            break; 
        case "mul":
            resultado = num1 * num2;
            break;
        case "div":
            if (num2 == 0 || num1 == 0){
                resultado = "No se puede dividir entre 0";
            }else{
                resultado = num1 / num2;
            }
            break;
    }
    document.getElementById("result").value = resultado;
}

