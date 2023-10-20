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
        if (data.access_token) {
            // Inicio de sesión exitoso, puedes redirigir al usuario o mostrar un mensaje de éxito
            document.getElementById('message').textContent = 'Inicio de sesión exitoso';
        } else {
            // Credenciales inválidas, muestra un mensaje de error
            document.getElementById('message').textContent = 'Credenciales inválidas';
        }
    })
    .catch(error => {
        // Maneja errores de red u otros errores
        document.getElementById('message').textContent = 'Ocurrió un error al iniciar sesión';
    });
});
