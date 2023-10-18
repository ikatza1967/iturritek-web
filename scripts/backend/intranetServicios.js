
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


function cargarServicios() {
    axios.get("http://127.0.0.1:4000/ver_servicios")
        .then(response => {
            const servicios = response.data;
            const serviciosContainer = document.getElementById("serviciosContainer");

            servicios.forEach(servicioData => {
                if (Array.isArray(servicioData) && servicioData.length === 5) {
                    const id = servicioData[0];
                    const nombre = servicioData[1];
                    const descripcion = servicioData[2];
                    const img = servicioData[3];
                    const categoriaId = servicioData[4];

                    const li = document.createElement("li");
                    li.innerHTML = `
                        <span>Nombre: ${nombre}</span><br>
                        <span>Descripción: ${descripcion}</span><br>
                        <span>Imagen: ${img}</span><br>
                        <span>Categoría ID: ${categoriaId}</span><br>
                        <button class="btnEliminar" data-id="${id}">Eliminar</button><br><br>
                    `;

                    li.querySelector(".btnEliminar").addEventListener("click", () => {
                        eliminarServicio(id);
                    });

                    serviciosContainer.appendChild(li);
                }
            });
        })
        .catch(error => {
            console.error("Error al cargar los servicios: " + error);
        });
}

// Llama a la función para cargar y mostrar los servicios
cargarServicios();
