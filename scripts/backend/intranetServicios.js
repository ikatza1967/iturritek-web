
// Funcion que se encarga de agragar servicios nuevos ********************************
function agregarServicio(event){
    event.preventDefault();

    const nombre_Servicio = document.getElementById('agregarNombreServicio').value
    const descripcion_Servicio = document.getElementById('agregarDescripcionServicio').value
    const img_Servicio = document.getElementById('agregarImgServicio').value
    const categoria_Id = document.getElementById('agregarIdCategoriaServicio').value
    
    
    const datos = {
        nombre_Servicio,
        descripcion_Servicio,
        img_Servicio,
        categoria_Id
    }

    console.log("Estos son los datos enviados para el back " + JSON.stringify(datos))

    axios.post("http://127.0.0.1:4000/agregar_servicio", datos)
    .then(response => {
        location.reload();
        console.log("Respuesta del servidor: " + JSON.stringify(response.data));
    })
    .catch(error => {
        console.error("Error al hacer la solicitud: " + error);
    });
}

// Funcion que se encarga de cargar los servicios en la intranet ****************
function cargarServicios() {
    axios.get("http://127.0.0.1:4000/ver_servicios")
        .then(response => {
            const servicios = response.data;
            const serviciosContainer = document.getElementById("serviciosContainer"); 
            console.log(servicios)
            servicios.forEach(servicio => {
                const id = servicio.id_Servicio;
                const nombre = servicio.nombre_Servicio;
                const descripcion = servicio.descripcion_Servicio;
                const imgBase64 = servicio.imagen_base64; // Imagen en formato base64
                const categoriaId = servicio.categoria_Id;

                const li = document.createElement("li");
                li.innerHTML = `
                    <p>ID: ${id}</p>
                    <p>Nombre: ${nombre}</p>
                    <p>Descripción: ${descripcion}</p>
                    <img src="data:image/jpeg;base64, ${imgBase64}" alt="Imagen del servicio" />
                    <p>Categoría ID: ${categoriaId}</p>
                    <button onclick="eliminarServicio('${id}')">Eliminar</button>
                `;

                serviciosContainer.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error al cargar los servicios: " + error);
        });
}

// Llama a la función para cargar y mostrar los servicios
cargarServicios();


// Función para eliminar un servicio ******************************************************
function eliminarServicio(id) {
    // Realiza una solicitud DELETE al servidor para eliminar la categoría
    axios.delete(`http://127.0.0.1:4000/eliminar_servicio/${id}`)
        .then(response => {
            // La categoría se eliminó con éxito, puedes realizar acciones adicionales aquí
            // Por ejemplo, actualizar la lista de categorías después de eliminar
            console.log(response.data);

            // Intenta eliminar la categoría de la lista en el cliente
            const servicioAEliminar = document.querySelector(`[data-id-servicio="${id}"]`);
            if (servicioAEliminar && servicioAEliminar.parentNode) {
                servicioAEliminar.parentNode.removeChild(servicioAEliminar);
            }
            location.reload();  
        })
        .catch(error => {
            // Ocurrió un error al eliminar la categoría
            console.error("Error al eliminar la categoría: " + error);
        });
}



// Logica para iterar el selct de las catregorias dinamicamente *******************************
    //Primero llamamos a las categorias
function cargarCategorias() {
    return axios.get("http://127.0.0.1:4000/ver_categorias")
        .then(response => {
            const categorias = response.data
            // ahora usamos los datos recividos para llamar a la funcion con parametros
            iterarCategorias(categorias)
        })
        .catch(error => {
            console.error("Error al cargar las categorías: " + error);
        });
}

// usamos la funcion pero con las categorias de parametro
function iterarCategorias(categorias) {
    const data = categorias;
    var categorias = data;

    // Encontramos el select
    var select = document.getElementById("agregarIdCategoriaServicio");

    // Itera a través de las categorías y sus sub-arreglos
    for (var i = 0; i < categorias.length; i++) {
        var subCategoria = categorias[i];
        // Codigo de chatgpt para manejar el objeto e iterarlo en el select
        if (Array.isArray(subCategoria) && subCategoria.length >= 2) {
            var id = subCategoria[0];
            var nombre = subCategoria[1];

            var option = document.createElement("option");
            option.value = id;
            option.text = nombre;
            select.appendChild(option);
        } else {
            console.error("Categoría inválida en el índice " + i);
        }
    }
}


// por ultimo llamamos a que carguen las ccategorias
cargarCategorias()