function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value) / 100;
    let edad = parseInt(document.getElementById("edad").value);
    let genero = document.getElementById("genero").value;
    let cintura = parseFloat(document.getElementById("cintura").value);
    let cuello = parseFloat(document.getElementById("cuello").value);
    let cadera = parseFloat(document.getElementById("cadera").value);

    // Cálculo del IMC
    let imc = peso / (altura * altura);
    document.getElementById("imcResultado").innerText = `IMC: ${imc.toFixed(2)}`;

    // Categoría del IMC
    let categoria = "";
    if (imc < 18.5) categoria = "Bajo peso";
    else if (imc < 24.9) categoria = "Peso normal";
    else if (imc < 29.9) categoria = "Sobrepeso";
    else categoria = "Obesidad";
    document.getElementById("categoriaIMC").innerText = `Categoría: ${categoria}`;

    // Cálculo del % de grasa corporal (fórmula de la Marina de EE.UU.)
    let grasa;
    if (genero === "hombre") {
        grasa = 86.010 * Math.log10(cintura - cuello) - 70.041 * Math.log10(altura * 100) + 36.76;
        document.getElementById("caderaLabel").style.display = "none";
        document.getElementById("cadera").style.display = "none";
    } else {
        grasa = 163.205 * Math.log10(cintura + cadera - cuello) - 97.684 * Math.log10(altura * 100) - 78.387;
        document.getElementById("caderaLabel").style.display = "block";
        document.getElementById("cadera").style.display = "block";
    }
    document.getElementById("grasaResultado").innerText = `% de Grasa Corporal: ${grasa.toFixed(2)}%`;
}
