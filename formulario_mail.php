<?php

$email_mail = $_POST["email-2"];
$error_mail = "";


if (empty(trim($_POST["email-2"]))) {
    $error_mail .= 'El email no puede estar vacio </br>';
} else {
    if (filter_var($_POST["email-2"], FILTER_VALIDATE_EMAIL)) {
        $email_mail = filter_var($_POST["email-2"], FILTER_SANITIZE_EMAIL);
    } else {
        $error .= 'Introduce un email válido </br>';
    }
}

// CUERPO DEL MENSAJE
$cuerpo = "Email enviado desde la WEB de GAFDesign \n";
$cuerpo .= "Email: " . $email_mail . "\n";


// DIRECCION
$enviarA = "info@gafdesign.es";

//ASUNTO
$asunto = "Enviado desde la WEB de GAFDESIGN";

//MAIL
if ($error == "") {
    $success = mail($enviarA, $asunto, $cuerpo, "de: " . $email_mail);
    echo "exito";
} else {
    echo $error;
}
