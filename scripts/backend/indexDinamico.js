// Función para cargar y mostrar las categorías
function cargarCategorias() {
    axios.get("http://127.0.0.1:4000/ver_categorias")
        .then(response => {
            const categorias = response.data;
            const categoriasContainer = document.getElementById("generarCategoriasIndex");

            categorias.forEach(categoriaData => {
                if (Array.isArray(categoriaData) && categoriaData.length === 2) {
                    const id = categoriaData[0];
                    const nombre = categoriaData[1];
                    // Damos un id unico al id de serviciosCategorias para que solo se genere en el lugar correcto
                    const categoriaHTML = `
                        
                            <h6 class="box__upper--title">${nombre}</h6>
                            <div class="services-container__box--upper serviciosEnCategorias" id="serviciosCategoria${id}"></div>
                       
                    `;

                    categoriasContainer.innerHTML += categoriaHTML;

                    servicioDeCategoria(id);
                }
            });
        })
        .catch(error => {
            console.error("Error al cargar las categorías: " + error);
        });
}

// Función para cargar servicios de una categoría específica
function servicioDeCategoria(id) {
    axios.get(`http://127.0.0.1:4000/servicioDeCategoria/${id}`)
        .then(response => {
            const servicios = response.data;
            console.log(servicios);

            const serviciosContainer = document.getElementById(`serviciosCategoria${id}`);

            const div = document.createElement("div");

            let contenidoHTML = '';

            servicios.forEach(servicioData => {
                const descripcionServicio = servicioData.descripcion_Servicio;
                const nombre = servicioData.nombre_Servicio;
                const id = servicioData.id_Servicio;
                const img = servicioData.imagen_base64;
                contenidoHTML += `
                   <article class="services__cont--cards">
                        <div>
                            <figure>
                                <img src="data:image/png;base64, ${img}" alt="Imagen del servicio" class="imgServicioPorCategoria" />
                            </figure>
                        </div>
                        <div class="services__cont__cards--info">
                            <h5 class="services__cont__cards--title">${nombre}</h5>
                            <p class="services__cont__cards--paragraph">${descripcionServicio}</p>
                        </div>
                    </article>
                `;
            });

            div.innerHTML = contenidoHTML;

            serviciosContainer.appendChild(div);
        })
        .catch(error => {
            console.error("Error al cargar los servicios específicos: " + error);
        });
}

// Se llama siempre a la funcion para mostrar categorías
cargarCategorias();