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
                if (texto === "exito") {
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

    



// con el segundo formulario solo con el email
$("#email-form").submit(function (ev) { 
    ev.preventDefault();
    enviar_mail();
});


      function enviar_mail() {
        var datos_mail = $("#email-form").serialize();
        $.ajax({
            type: "post",
            url: "formulario_mail.php",
            data: datos_mail,
            success: function (texto_mail) {
                if (texto_mail === "exito") {
                     correcto_mail();
                    
                } else {
                    phperror_mail(texto);
                }
            }
       // del AJAX
        });
// del function
    }
       
function correcto_mail() {
       $("#mensajeExito_mail").css('display', 'block'); 
       $("#mensajeError_mail").css('display', 'none'); 
       $("#email-form")[0].reset();
        setTimeout(function ()
        { $("#mensajeExito_mail").css('display', 'none');  }, 3000);
    }
    
    function phperror(texto) {
       $("#mensajeExito_mail").css('display', 'none'); 
       $("#mensajeError_mail").css('display', 'block');
       $("#mensajeError_mail").html(texto);
    }
   
// del document ready
});