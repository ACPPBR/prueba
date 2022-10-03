/*
    https://parzibyte.me/blog
*/
// Elementos del DOM

if ((window.FileList)) {
    console.log('La API FileList no está soportada');
    //return;
}


const $inputArchivos = document.querySelector("#inputArchivos"),
    $btnEnviar = document.querySelector("#btnEnviar"),
    $estado = document.querySelector("#estado");
$btnEnviar.addEventListener("click", async () => {

    

    const archivosParaSubir = $inputArchivos.files;
    console.log(archivosParaSubir); 
    if (archivosParaSubir.length <= 0) {
        // Si no hay archivos, no continuamos
        return;
    }
    // Preparamos el formdata
    const formData = new FormData();
    // Agregamos cada archivo a "archivos[]". Los corchetes son importantes
    for (const archivo of archivosParaSubir) {
        formData.append("archivos[]", archivo);
    }
    // Los enviamos
    $estado.textContent = "Enviando archivos...";
    const respuestaRaw = await fetch("./subir.php", {
        method: "POST",
        body: formData,
    });
    const respuesta = respuestaRaw.json();
    // Puedes manejar la respuesta como tú quieras
    console.log({ respuesta });
    // Finalmente limpiamos el campo
    $inputArchivos.value = null;
    $estado.textContent = "Archivos enviados";
});