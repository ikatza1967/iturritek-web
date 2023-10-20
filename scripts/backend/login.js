document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username, password);
    axios.post('http://127.0.0.1:4000/login', {
        username: username,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        const data = response.data;
        console.log(data);
        if (data.access_token) {
            // Inicio de sesión exitoso, puedes redirigir al usuario o mostrar un mensaje de éxito
            document.getElementById('message').textContent = 'Inicio de sesión exitoso';
            localStorage.setItem('access_token', data.access_token);
            window.location.href = '/pages/intranet.html';
        } else {
            // Credenciales inválidas, muestra un mensaje de error
            document.getElementById('message').textContent = 'Credenciales inválidas';
        }
    })
    .catch(error => {
        // Maneja errores de red u otros errores
        if (error.response && error.response.status === 401) {
            // Error de autenticación (credenciales inválidas)
            document.getElementById('message').textContent = 'Credenciales inválidas';
        } else {
            document.getElementById('message').textContent = 'Ocurrió un error al iniciar sesión';
        }
    });
});
