$(document).ready(function () {

    $("#formulario").submit(function (e) {
    e.preventDefault();
    enviar();
});        

    function enviar() {
        var datos = $("#formulario").serialize();
        $.ajax({
            type: "post",
            url: "formulario.php",
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
       $("#mensajeExito").css('display', 'block'); 
       $("#mensajeError").css('display', 'none'); 
       $("#formulario")[0].reset();
        setTimeout(function ()
        { $("#mensajeExito").css('display', 'none');  }, 3000);
    }
    
    function phperror(texto) {
       $("#mensajeExito").css('display', 'none'); 
       $("#mensajeError").css('display', 'block');
       $("#mensajeError").html(texto);
    }
});