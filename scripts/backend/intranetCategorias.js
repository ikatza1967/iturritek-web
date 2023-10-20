// Funcion para agregar nuevas categorias
function agregarCategoria(event){
    event.preventDefault();

    const nombre_Categoria = document.getElementById('agregarNombreCategoria').value
    
    const datos = {
        nombre_Categoria
    }

    console.log("Estos son los datos enviados para el back " + JSON.stringify(datos))

    axios.post("http://127.0.0.1:4000/agregar_categoria", datos)
    .then(response => {
        location.reload();
        console.log("Respuesta del servidor: " + JSON.stringify(response.data));
    })
    .catch(error => {
        console.error("Error al hacer la solicitud: " + error);
    });
}

// Función para cargar y mostrar las categorías
function cargarCategorias() {
    axios.get("http://127.0.0.1:4000/ver_categorias")
        .then(response => {
            const categorias = response.data;
            const categoriasContainer = document.getElementById("categoriasContainer");

            categorias.forEach(categoriaData => {
                if (Array.isArray(categoriaData) && categoriaData.length === 2) {
                    const id = categoriaData[0];
                    const nombre = categoriaData[1];

                    // Utiliza una plantilla literal para crear el elemento de lista (li) con el botón "Eliminar"
                    const div = document.createElement("div");
                    div.innerHTML = `
                        <span>ID: ${id}</span></br> <span>Nombre: ${nombre}</span></br>
                        <button class="btnEliminar" data-id="${id}">Eliminar</button></br></br>
                    `;

                    // Agrega un evento clic al botón "Eliminar"
                    div.querySelector(".btnEliminar").addEventListener("click", () => {
                        eliminarCategoria(id);
                    });

                    // Agrega el elemento de lista al contenedor
                    categoriasContainer.appendChild(div);
                }
            });
        })
        .catch(error => {
            console.error("Error al cargar las categorías: " + error);
        });
}

// Se llama siempre a la funcion para mostrar categorias
cargarCategorias()

// Función para eliminar una categoría
function eliminarCategoria(idCategoria) {
    // Realiza una solicitud DELETE al servidor para eliminar la categoría
    axios.delete(`http://127.0.0.1:4000/eliminar_categoria/${idCategoria}`)
        .then(response => {
            // La categoría se eliminó con éxito, puedes realizar acciones adicionales aquí
            // Por ejemplo, actualizar la lista de categorías después de eliminar
            console.log(response.data);

            // Intenta eliminar la categoría de la lista en el cliente
            const categoriaAEliminar = document.querySelector(`[data-id="${idCategoria}"]`);
            if (categoriaAEliminar && categoriaAEliminar.parentNode) {
                categoriaAEliminar.parentNode.removeChild(categoriaAEliminar);
            }
            location.reload();
        })
        .catch(error => {
            // Ocurrió un error al eliminar la categoría
            console.error("Error al eliminar la categoría: " + error);
        });
}



