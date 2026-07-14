function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
    let res;

    switch (operacion) {
        case "suma":
            res = num1 + num2;
            break;
        case "resta":
            res = num1 - num2;
            break;
        case "multiplicacion":
            res = num1 * num2;
            break;
        case "division":
            res = num1 / num2;
            break;
        default:
            console.warn("Operación no reconocida:", operacion);
    }

    document.getElementById("resultado").textContent = "Resultado: " + res;
}