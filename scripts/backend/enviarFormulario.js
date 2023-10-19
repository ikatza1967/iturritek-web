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

//Funcion para iterar el selct con los servicios ********************************
// Primero se llama a los sericios

function cargarServicios() {
    axios.get("http://127.0.0.1:4000/ver_servicios")
        .then(response => {
            const servicios = response.data;
            iterarServicios(servicios)
        })
        .catch(error => {
            console.error("Error al cargar los servicios: " + error);
        });
}

cargarServicios()
// Una vez tenemos los servicios se iteran
function iterarServicios(servicios) {
    const selectServicio = document.getElementById('agregarIdServicio');

    servicios.forEach(servicio => {
        const option = document.createElement('option'); 
        option.value = servicio.id_Servicio; 
        option.text = servicio.nombre_Servicio; 
        selectServicio.appendChild(option); 
    });
}

