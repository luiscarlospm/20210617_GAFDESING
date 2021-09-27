$(document).ready(function () {

    $("#email-form").submit(function (e) {
    e.preventDefault();
    enviar();
});        

    function enviar() {
        var datos = $("#email-form").serialize();
        $.ajax({
            type: "post",
            url: "formulario_mail.php",
            data: datos,
            success: function (texto) {
                if (texto == "exito") {
                     correcto();
                } else {
                    phperror(texto);
                }
            }
       // del AJAX
        });
// del function
    }

    function correcto() {
       $("#mensajeExito_mail").css('display', 'block'); 
       $("#mensajeFallo_mail").css('display', 'none'); 
       $("#email-form")[0].reset();
        setTimeout(function ()
        { $("#mensajeExito_mail").css('display', 'none');  }, 3000);
    }
    
    function phperror(texto) {
       $("#mensajeExito_mail").css('display', 'none'); 
       $("#mensajeFallo_mail").css('display', 'block');
       $("#mensajeFallo_mail").html(texto);
    }
});