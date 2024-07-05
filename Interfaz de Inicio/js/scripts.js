document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('#content');

    function renderLogin() {
        content.innerHTML = `
            <div>
                <h1 class="mt-50 text-indigo-600 font-black text-7xl pl-7">Inicia Sesión y Accede <span class="text-black">al Sistema Veterinario</span></h1>
            </div>

            <div class="div-login mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                <div id="alert"></div>
                <form id="login-form">
                    <div class="mt-5">
                        <label class="uppercase text-gray-600 block text-xl font-bold" for="Rol">Rol del Usuario</label>
                            <select class="border w-full p-3 mt-3 bg-gray-50 rounded-xl" id="rol">
                                <option value="" disabled selected>Selecciona el Rol del Usuario</option>
                                <option value="admin">Administrador</option>
                                <option value="veterinario">Veterinario</option>
                                <option value="propietario">Propietario</option>
                            </select>
                    </div>
                    <div class="my-5">
                        <label class="uppercase text-gray-600 block text-xl font-bold">Email</label>
                        <input type="email" id="email" placeholder="Email de Registro" class="border w-full p-3 mt-3 bg-gray-50 rounded-xl">
                    </div>
                    <div class="my-5">
                        <label class="uppercase text-gray-600 block text-xl font-bold">Password</label>
                        <input type="password" id="password" placeholder="Tu password" class="border w-full p-3 mt-3 bg-gray-50 rounded-xl">
                    </div>
                    <input type="submit" value="Iniciar Sesión" class="border w-full py-3 px-10 mt-5 bg-indigo-700 text-white rounded-xl uppercase font-bold hover:cursor-pointer hover:bg-indigo-800">
                </form>

                <nav class="mt-10 lg:flex lg:justify-between">
                    <a class="block text-center my-5 text-gray-500" href="#" id="register-link">¿No tienes una cuenta? Registrate</a>
                    <!-- <a class="block text-center my-5 text-gray-500 pr-20" href="#" id="forgot-password-link">Olvide mi Password</a> -->
                </nav>
            </div>
        `;

        document.querySelector('#login-form').addEventListener('submit', handleLogin);
        document.querySelector('#register-link').addEventListener('click', renderRegister);

        const rolSelect = document.getElementById('rol');
        const registerLink = document.getElementById('register-link');
        
        rolSelect.addEventListener('change', function() {
            if (rolSelect.value === 'propietario') {
                registerLink.style.display = 'block';
            } else {
                registerLink.style.display = 'none';
            }
        });

        // Inicialmente ocultar el enlace de registro
        registerLink.style.display = 'none';
    }

    function handleLogin(e) {
        e.preventDefault();
        const rol = document.getElementById('rol').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const alert = document.querySelector('#alert');

        if (rol === '' || email === '' || password === '') {
            alert.innerHTML = `<div class="alert alert-error">Todos los campos son obligatorios</div>`;
            return;
        }

        // Simulate API call and navigation
        if ( rol === 'admin' && email === 'admin@correo.com' && password === '123456' ) {
            console.log(rol);
            console.log('Logging in with', email, password);
            localStorage.setItem('token', 'dummy-token');
            alert.innerHTML = `<div class="alert alert-success">Inicio de sesión exitoso</div>`;
            setTimeout(() => {
                window.location.href = '../Interfaz del Administrador/index.html';
            }, 1000);
            return;
        }
        if ( rol === 'veterinario' ) {
            console.log(rol);
            console.log('Logging in with', email, password);
            localStorage.setItem('token', 'dummy-token');
            alert.innerHTML = `<div class="alert alert-success">Inicio de sesión exitoso</div>`;
            setTimeout(() => {
                window.location.href = '../Interfaz del Veterinario/index.html';
            }, 1000);
            return;
        }
        if ( rol === 'propietario' ) {
            console.log(rol);
            console.log('Logging in with', email, password);
            localStorage.setItem('token', 'dummy-token');
            alert.innerHTML = `<div class="alert alert-success">Inicio de sesión exitoso</div>`;
            setTimeout(() => {
                window.location.href = '../Interfaz del Propietario/index.html';
            }, 1000);
            return;
        }
    }

    function renderRegister() {
        content.innerHTML = `
            <div>
                <h1 class="mt-50 text-indigo-600 font-black text-7xl pl-7">Crea una cuenta y ten Seguimiento <span class="text-black">de tus Mascotas</span></h1>
            </div>

            <div class="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                <div id="alert"></div>
                <form id="register-form">
                    <div class="my-5">
                        <label class="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
                        <input type="text" id="nombre" placeholder="Tu Nombre" class="border w-full p-3 mt-3 bg-gray-50 rounded-xl">
                    </div>
                    <div class="my-5">
                        <label class="uppercase text-gray-600 block text-xl font-bold">Email</label>
                        <input type="email" id="email" placeholder="Email de Registro" class="border w-full p-3 mt-3 bg-gray-50 rounded-xl">
                    </div>
                    <div class="my-5">
                        <label class="uppercase text-gray-600 block text-xl font-bold">Password</label>
                        <input type="password" id="password" placeholder="Tu Password" class="border w-full p-3 mt-3 bg-gray-50 rounded-xl">
                    </div>
                    <div class="my-5">
                        <label class="uppercase text-gray-600 block text-xl font-bold">Repetir Password</label>
                        <input type="password" id="repetir-password" placeholder="Repite tu Password" class="border w-full p-3 mt-3 bg-gray-50 rounded-xl">
                    </div>
                    <input type="submit" value="Crear Cuenta" class="border w-full py-3 px-10 mt-5 bg-indigo-700 text-white rounded-xl uppercase font-bold hover:cursor-pointer hover:bg-indigo-800">
                </form>

                <nav class="mt-10 lg:flex lg:justify-between">
                    <a class="block text-center my-5 text-gray-500" href="#" id="login-link">¿Ya tienes una cuenta? Inicia Sesión</a>
                </nav>
            </div>
        `;

        document.querySelector('#register-form').addEventListener('submit', handleRegister);
        document.querySelector('#login-link').addEventListener('click', renderLogin);
    }

    function handleRegister(e) {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const repetirPassword = document.querySelector('#repetir-password').value;
        const alert = document.querySelector('#alert');

        if (nombre === '' || email === '' || password === '' || repetirPassword === '') {
            alert.innerHTML = `<div class="alert alert-error">Todos los campos son obligatorios</div>`;
            return;
        }

        if (password !== repetirPassword) {
            alert.innerHTML = `<div class="alert alert-error">Los Password no son iguales</div>`;
            return;
        }

        if (password.length < 6) {
            alert.innerHTML = `<div class="alert alert-error">El Password es muy corto, ingresa mínimo 6 caracteres</div>`;
            return;
        }

        // Simulate API call
        console.log('Logging in with', email, password);
        localStorage.setItem('token', 'dummy-token');
        alert.innerHTML = `<div class="alert alert-success">Inicio de sesión exitoso</div>`;
        setTimeout(() => {
            window.location.href = '../Interfaz del Propietario/index.html';
        }, 1000);
        return;
    }

    renderLogin(); // Initialize the login view
});
