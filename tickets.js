const valorTicket = 200;

//DESCUENTOS

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

//ELEMENTOS EN VARIABLES

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");

// CALCULO PARA PAGAR

function validarCorreo(email){
    var valCar = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = valCar.test(email);
}

function pagar(){

    if (nombre.value=== ""){
        alert("Debes escribir tu nombre.");
        return
    }

    if (apellido.value=== ""){
        alert("Debes escribir tu apellido.");
        return
    }

    if (email.value=== ""){
        alert("Debes escribir tu mail");
        return
    }

// MAIL VALIDO

    if (!validarCorreo(email.value)) {
        alert("Escribe un correo electrónico válido.");
        return
    }

//TICKETS

    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Ingrese correctamente cantidad de tickets.");
        return
    }

    if (categoria.value == "") {
        alert("Seleccione una categoría.");
        return
    }

//VARIABLE CANTIDAD TICKETS POR VALOR

    let valorTotalTickets = (cantidadTickets.value) * valorTicket;

//DESCUENTOS SEGUN CATEGORIA

    if(categoria.value==0){
        valorTotalTickets=valorTotalTickets;
    }

    if(categoria.value=1){
        valorTotalTickets= valorTotalTickets - (descuentoEstudiante/100 * valorTotalTickets);
    }

    if(categoria.value=1){
        valorTotalTickets= valorTotalTickets - (descuentoTrainee/100 * valorTotalTickets);
    }

    if(categoria.value=1){
        valorTotalTickets= valorTotalTickets - (descuentoJunior/100 * valorTotalTickets);
    }

    totalPago.innerHTML=valorTotalTickets;

}
//BOTONES

btn1.addEventListener('click',pagar);

