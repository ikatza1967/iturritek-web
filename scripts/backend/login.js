function EnsenarOverlayLogin() {
    var overlay = document.querySelector('.overlayLoginIntranet');
    overlay.style.display = 'flex';
}

function OcultarOverlayLogin(event) {
    var overlay = document.querySelector('.overlayLoginIntranet');
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
}



document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

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
            document.getElementById('message').textContent = 'Inicio de sesión exitoso';
            localStorage.setItem('access_token', data.access_token);
            window.location.href = '/pages/intranet.html';
        } else {
            document.getElementById('message').textContent = 'Credenciales inválidas';
        }
    })
    .catch(error => {
        if (error.response && error.response.status === 401) {
            document.getElementById('message').textContent = 'Credenciales inválidas';
        } else {
            document.getElementById('message').textContent = 'Ocurrió un error al iniciar sesión';
        }
    });
});
