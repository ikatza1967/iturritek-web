
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