<?php
/*
    https://parzibyte.me/blog
*/
$conteo = count($_FILES["archivos"]["name"]);

for ($i = 0; $i < $conteo; $i++) {
    $ubicacionTemporal = $_FILES["archivos"]["tmp_name"][$i];
    $nombreArchivo = $_FILES["archivos"]["name"][$i];
    $extension = pathinfo($nombreArchivo, PATHINFO_EXTENSION);
    // Renombrar archivo
    // $nuevoNombre = sprintf("08092022", uniqid(), $i, $extension);
     $nuevoNombre = date("d-m-Y_H:i:s").".".$extension;
    // Mover del temporal al directorio actual
    move_uploaded_file($ubicacionTemporal, $nuevoNombre);
}
// Responder al cliente
echo json_encode(true);

// Miguel Bernal y sus mujeres