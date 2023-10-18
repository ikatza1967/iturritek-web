// Conseguimos los div de los overlays
const overlayBien = document.querySelector('.overlayBien');
const overlayMal = document.querySelector('.overlayMal');

// Cuando se activa hace que el popup verde aparezca
function envioCorrecto(){
  overlayBien.classList.add('mostrar');
  setTimeout(function () {
    overlayBien.classList.remove('mostrar');
  }, 3000);
}  

// Cuando se activa sale el popup rojo
function envioFallido(){
  overlayMal.classList.add('mostrar');
  setTimeout(function () {
    overlayMal.classList.remove('mostrar');
  }, 3000);
}


//Funcionalidad para enviar los datos del formulario al back
function enviarDatos(event) {
    event.preventDefault();

    // Datos del formulario
    const user_name = document.getElementById("name").value;
    const user_surname = document.getElementById("surname").value;
    const user_tel = document.getElementById("tel").value;
    const user_email = document.getElementById("email").value;
    const select = document.querySelector(".datos-servicio").value;
    const message = document.getElementById("mensaje").value;

    // Metemos los datos en un obejto
    const datos = {
      user_name,
      user_surname,
      user_tel,
      user_email,
      select,
      message
    };

    console.log("Estos son los datos enviados para el back " + JSON.stringify(datos))

    // Solicitud al back
    axios.post("http://127.0.0.1:4000/recibir_datos", datos)
      .then(response => {
        // Gestionamos si funciona pero la parte de enviar el correo no
        if (response.data.error) {
          console.error(response.data.error);
          envioFallido();
          // Si todo sale bien
        } else {
          // Manejar el éxito
          envioCorrecto();
        }
      })
      // Error general
      .catch(error => {
        console.error(error);
        envioFallido();
      });
  }