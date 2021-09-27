<?php
$error = "";

if (empty(trim($_POST["nombre"]))) {
    $error = 'El nombre no puede estar vacio </br>';
} else {
    $nombre = filter_var($_POST["nombre"], FILTER_SANITIZE_STRING);
}


if (empty(trim($_POST["email"]))) {
    $error .= 'El email no puede estar vacio </br>';
} else {
    if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    } else {
        $error .= 'Introduce un email válido </br>';
    }
}

$texto = filter_var($_POST["mensaje"], FILTER_SANITIZE_STRING);

// CUERPO DEL MENSAJE

$cuerpo = "Mensaje enviado desde la WEB de GAFDESIGN \n";
$cuerpo .=  "Nombre: " . $nombre . "\n";
$cuerpo .= "Email: " . $email . "\n";
$cuerpo .= "Mensaje: " . $texto . "\n";


// DIRECCION
$enviarA = "info@gafdesign.es";


//ASUNTO
$asunto = "Enviado desde la WEB de GAFDESIGN";

//MAIL

if ($error == "") {
    $success = mail($enviarA, $asunto, nl2br($cuerpo), "de: " . $email);
    echo "exito";
} else {
    echo $error;
}