document.addEventListener('DOMContentLoaded', function () {
    const auth = {
        nombre: 'Ezequiel',
        web: 'https://example.com',
        telefono: '1234567890',
        email: 'correo@correo.com'
    };

    const formulario = document.getElementById('formulario-perfil');
    const alertaDiv = document.getElementById('alerta');

    function mostrarAlerta(msg, error = false) {
        alertaDiv.textContent = msg;
        alertaDiv.className = error ? 'alerta error' : 'alerta success';
        alertaDiv.style.display = 'block';
        setTimeout(() => {
            alertaDiv.style.display = 'none';
            alertaDiv.className = 'alerta';
        }, 3000);
    }

    formulario.nombre.value = auth.nombre;
    formulario.web.value = auth.web;
    formulario.telefono.value = auth.telefono;
    formulario.email.value = auth.email;

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const perfil = {
            nombre: formulario.nombre.value,
            web: formulario.web.value,
            telefono: formulario.telefono.value,
            email: formulario.email.value
        };

        if (perfil.nombre === '' || perfil.email === '') {
            mostrarAlerta('Email y Nombre son obligatorios', true);
            return;
        }

        // Simular actualización de perfil
        setTimeout(() => {
            mostrarAlerta('Perfil actualizado correctamente');
        }, 1000);
    });
});

function cerrarSesion() {
    // Aquí puedes añadir la lógica para cerrar sesión, como redirigir a la página de login o limpiar datos del usuario
    const confirmar = confirm('¿Estás seguro que cerrar sesión?')

        if ( confirmar ) {
            window.location.href = '../Interfaz de Inicio/index.html';
        }
}