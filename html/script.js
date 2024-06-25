// Obtener referencias a los elementos del DOM
const input1 = document.getElementById('input1'); // Cuota 1
const input2 = document.getElementById('input2'); // Cuota 2
const input3 = document.getElementById('input3'); // Cuota 3
const input4 = document.getElementById('input4'); // Resultado 1
const input5 = document.getElementById('input5'); // Importe
const input6 = document.getElementById('input6'); // Resultado 2
const input7 = document.getElementById('input7'); // Resultado 1 (Cuota 1 * Resultado 1)
const input8 = document.getElementById('input8'); // Resultado Auxiliar
const input9 = document.getElementById('input9'); // Resultado 3
const calcularBtn = document.getElementById('calcularBtn'); // Botón Calcular
const limpiarBtn = document.getElementById('limpiarBtn'); // Botón Limpiar

function calcularResultados() {
    // Obtener y parsear valores de entrada
    const valor1 = parseFloat(input1.value) || 0; // Cuota 1
    const valor2 = parseFloat(input2.value) || 0; // Cuota 2
    const valor3 = parseFloat(input3.value) || 0; // Cuota 3
    const valor5 = parseFloat(input5.value) || 0; // Importe

    // Calcular resultados intermedios
    const resultadoIntermedio = valor2 * valor5;
    input8.value = resultadoIntermedio.toFixed(2);

    // Calcular resultados finales y actualizar campos de entrada
    const resultado1 = resultadoIntermedio / valor1;
    input4.value = resultado1.toFixed(2);

    const resultado2 = resultadoIntermedio / valor3;
    input6.value = resultado2.toFixed(2);

    // Calcular el campo de resultado 1 como la multiplicación de input4 por input1
    const resultado1Final = parseFloat(input4.value) * valor1;
    input7.value = resultado1Final.toFixed(2);

    // Calcular la multiplicación de input6 por input3 y mostrar en input9
    const resultado2Final = parseFloat(input6.value) * valor3;
    input9.value = resultado2Final.toFixed(2);

    // Calcular la suma total y actualizar el campo de riesgo
    const sumaTotal = parseFloat(input4.value) + parseFloat(input5.value) + parseFloat(input6.value) - parseFloat(input8.value);
    const riesgoFinal = sumaTotal * -1; // Invertir el signo
    input7.value = riesgoFinal.toFixed(2);
}

function limpiarInputs() {
    // Limpiar todos los campos de entrada
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';
    input6.value = '';
    input7.value = '';
    input8.value = '';
    input9.value = '';
}

// Asociar funciones a eventos de clic en los botones
calcularBtn.addEventListener('click', calcularResultados);
limpiarBtn.addEventListener('click', limpiarInputs);