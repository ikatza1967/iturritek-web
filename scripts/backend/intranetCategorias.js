function agregarCategoria(event){
    event.preventDefault();

    const nombre_Categoria = document.getElementById('agregarNombreCategoria').value
    
    const datos = {
        nombre_Categoria
    }

    console.log("Estos son los datos enviados para el back " + JSON.stringify(datos))

    axios.post("http://127.0.0.1:4000/agregar_categoria", datos)
    .then(response => {
        console.log("Respuesta del servidor: " + JSON.stringify(response.data));
    })
    .catch(error => {
        console.error("Error al hacer la solicitud: " + error);
    });
}