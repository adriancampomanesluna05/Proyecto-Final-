// Actualizar reloj en tiempo real
function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours().toString().padStart(2, '0');
    let minutos = ahora.getMinutes().toString().padStart(2, '0');
    let segundos = ahora.getSeconds().toString().padStart(2, '0');
    
    document.getElementById("reloj").innerText = `${horas}:${minutos}:${segundos}`;
}
setInterval(actualizarReloj, 1000);

// Configurar alarma
let alarmaHora = null;
document.getElementById("setAlarma").addEventListener("click", function() {
    alarmaHora = document.getElementById("horaAlarma").value;
    alert("Alarma establecida para " + alarmaHora);
});

setInterval(() => {
    const ahora = new Date();
    let horaActual = ahora.getHours().toString().padStart(2, '0') + ":" + ahora.getMinutes().toString().padStart(2, '0');
    
    if (horaActual === alarmaHora) {
        alert("⏰ ¡Alarma sonando!");
    }
}, 1000);

// Cronómetro
let segundos = 0, minutos = 0, horas = 0;
let intervalo;
let corriendo = false;

document.getElementById("start").addEventListener("click", function() {
    if (!corriendo) {
        intervalo = setInterval(() => {
            segundos++;
            if (segundos == 60) { segundos = 0; minutos++; }
            if (minutos == 60) { minutos = 0; horas++; }
            document.getElementById("cronometro").innerText =
                `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }, 1000);
        corriendo = true;
    }
});

document.getElementById("pause").addEventListener("click", function() {
    clearInterval(intervalo);
    corriendo = false;
});

document.getElementById("reset").addEventListener("click", function() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById("cronometro").innerText = "00:00:00";
    corriendo = false;
});
