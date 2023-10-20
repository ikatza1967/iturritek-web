// Verificar si el usuario tiene un token almacenado
const token = localStorage.getItem('access_token');

if (!token) {
    // El usuario no tiene un token válido, redirigir a la página de inicio de sesión
    window.location.href = '/pages/login.html'; // O la URL de tu página de inicio de sesión
} else {
    // El usuario tiene un token válido, puedes cargar la página de intranet
    // Por ejemplo, utilizando una solicitud fetch para obtener el contenido de intranet.html
    fetch('/pages/intranet.html')
        .then(response => response.text())
        .then(html => {
            // Insertar el contenido de intranet.html en un contenedor en tu página principal
            const intranetContainer = document.getElementById('intranet-container');
            intranetContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar la página de intranet', error);
        });
}
