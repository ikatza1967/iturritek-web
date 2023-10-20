// Verificar si el usuario tiene un token almacenado
const token = localStorage.getItem('access_token');

if (!token) {
    // El usuario no tiene un token válido, redirigir a la página de inicio de sesión
    window.location.href = '/pages/login.html'; 
} else {
    // El usuario tiene un token válido, puedes cargar la página de intranet
    fetch('/pages/intranet.html')
    .then(response => response.text())
    .then(html => {
        const intranetContainer = document.getElementById('intranet-container');
        intranetContainer.innerHTML = html;
    })
    .catch(error => {
        console.error('Error al cargar la página de intranet', error);
    });
}
